import { RFQFormData } from '../types';

export interface SheetAppendResult {
  success: boolean;
  spreadsheetId?: string;
  spreadsheetUrl?: string;
  error?: string;
}

const SPREADSHEET_NAME = '유지텔레컴_수주및견적문의_목록';

export async function appendRFQToGoogleSheet(
  accessToken: string,
  formData: RFQFormData,
  submittedCode: string
): Promise<SheetAppendResult> {
  try {
    // 1. Search if the spreadsheet already exists in Google Drive
    const searchUrl = `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(
      SPREADSHEET_NAME
    )}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`;

    const searchRes = await fetch(searchUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    let spreadsheetId = '';

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (searchData.files && searchData.files.length > 0) {
        spreadsheetId = searchData.files[0].id;
      }
    }

    // 2. If not found, create a new spreadsheet
    if (!spreadsheetId) {
      const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: { title: SPREADSHEET_NAME },
          sheets: [
            {
              properties: { title: '견적접수목록' },
            },
          ],
        }),
      });

      if (!createRes.ok) {
        const createErr = await createRes.json();
        throw new Error(createErr?.error?.message || '구글 시트 생성 실패');
      }

      const createData = await createRes.json();
      spreadsheetId = createData.spreadsheetId;

      // Add Header row
      await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/견적접수목록!A1:append?valueInputOption=USER_ENTERED`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [
              [
                '접수번호',
                '접수일시',
                '발주처/회사명',
                '담당자명',
                '연락처',
                '이메일',
                '사업분야',
                '예상예산',
                '착공시기',
                '현장실사요청',
                '공사개요 및 요청사항',
              ],
            ],
          }),
        }
      );
    }

    // 3. Append the Customer RFQ Data Row
    const appendRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/견적접수목록!A1:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [
            [
              submittedCode,
              new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
              formData.companyName,
              formData.contactName,
              formData.phone,
              formData.email,
              formData.projectCategory,
              formData.budgetRange,
              formData.estimatedStartDate,
              formData.needSiteSurvey ? '요청' : '미요청',
              formData.description || '없음',
            ],
          ],
        }),
      }
    );

    if (!appendRes.ok) {
      const appendErr = await appendRes.json();
      throw new Error(appendErr?.error?.message || '구글 시트 데이터 추가 실패');
    }

    const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
    return {
      success: true,
      spreadsheetId,
      spreadsheetUrl,
    };
  } catch (err: any) {
    console.error('appendRFQToGoogleSheet error:', err);
    return {
      success: false,
      error: err.message || '구글 시트 저장 중 오류가 발생했습니다.',
    };
  }
}
