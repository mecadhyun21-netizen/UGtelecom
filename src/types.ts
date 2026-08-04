export type NavCategory = 'company' | 'business' | 'projects' | 'safety' | 'careers' | 'contact';

export interface BusinessService {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  iconName: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  bgImage: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  clientCategory: 'public' | 'skt' | 'enterprise' | 'railway';
  year: string;
  category: string;
  location: string;
  scope: string;
  scale: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export interface Milestone {
  year: string;
  month?: string;
  title: string;
  description: string;
  tag?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  certNumber: string;
  date: string;
  category: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  deadline: string;
  requirements: string[];
  responsibilities: string[];
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  tel: string;
  fax: string;
  contactPerson: string;
  email: string;
  lat: number;
  lng: number;
  isHeadquarter: boolean;
}

export interface RFQFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectCategory: string;
  budgetRange: string;
  estimatedStartDate: string;
  location: string;
  description: string;
  needSiteSurvey: boolean;
}
