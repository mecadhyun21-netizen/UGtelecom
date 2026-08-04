import React, { useState } from 'react';
import { GNBHeader } from './components/GNBHeader';
import { HeroSection } from './components/HeroSection';
import { CompanyOverview } from './components/CompanyOverview';
import { BusinessSolutions } from './components/BusinessSolutions';
import { InteractiveNetworkDiagram } from './components/InteractiveNetworkDiagram';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { SafetyESGPortal } from './components/SafetyESGPortal';
import { CareersSection } from './components/CareersSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { RFQSimulatorModal } from './components/RFQSimulatorModal';
import { BrochureModal } from './components/BrochureModal';
import { AIStudioAssistant } from './components/AIStudioAssistant';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [preselectedRfqCategory, setPreselectedRfqCategory] = useState<string | undefined>(undefined);

  const handleOpenRFQModal = (category?: string) => {
    setPreselectedRfqCategory(category);
    setRfqModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#111111] flex flex-col font-sans selection:bg-[#323A87] selection:text-white">
      {/* Navigation Header */}
      <GNBHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openRFQModal={() => handleOpenRFQModal()}
        openBrochureModal={() => setBrochureModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Banner with Stats */}
        <HeroSection
          onNavigate={handleNavigate}
          openRFQModal={() => handleOpenRFQModal()}
          openBrochureModal={() => setBrochureModalOpen(true)}
        />

        {/* 2. Company Overview (CEO, Vision, History, Certifications) */}
        <CompanyOverview
          openBrochureModal={() => setBrochureModalOpen(true)}
        />

        {/* 3. Core Business Solutions */}
        <BusinessSolutions
          openRFQModal={(cat) => handleOpenRFQModal(cat)}
        />

        {/* 4. Interactive Infrastructure Network Diagram */}
        <InteractiveNetworkDiagram />

        {/* 5. Project Portfolio & Case Studies */}
        <ProjectPortfolio />

        {/* 6. Safety & ESG Portal */}
        <SafetyESGPortal />

        {/* 7. Careers & Job Openings */}
        <CareersSection />

        {/* 8. Regional Offices & Location Guide */}
        <LocationSection />
      </main>

      {/* Enterprise B2B Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openRFQModal={() => handleOpenRFQModal()}
        openBrochureModal={() => setBrochureModalOpen(true)}
      />

      {/* Interactive Modals & AI Assistant */}
      <RFQSimulatorModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        preselectedCategory={preselectedRfqCategory}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      <AIStudioAssistant
        openRFQModal={(cat) => handleOpenRFQModal(cat)}
      />
    </div>
  );
}
