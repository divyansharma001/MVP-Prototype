import React from 'react';
import type { PageComponent, SiteData } from '../../types/page-builder';
import ComponentWrapper from './ComponentWrapper';

import TemplateHeader from '../../templates/BakeryTemplate/components/TemplateHeader';
import HeroSection from '../../templates/BakeryTemplate/components/HeroSection';
import CategoryShowcase from '../../templates/BakeryTemplate/components/CategoryShowcase';
import BestSellers from '../../templates/BakeryTemplate/components/BestSellers';
import FullWidthCTA from '../../templates/BakeryTemplate/components/FullWidthCTA';
import Testimonials from '../../templates/BakeryTemplate/components/Testimonials';
import EmailCTA from '../../templates/BakeryTemplate/components/EmailCTA';
import TemplateFooter from '../../templates/BakeryTemplate/components/TemplateFooter';

interface PageRendererProps {
  siteData: SiteData;
  selectedComponentId: string | null;
  onSelectComponent: (id: string | null) => void;
  onRemoveComponent: (id: string) => void;
  onMoveComponent: (id: string, direction: 'up' | 'down') => void;
}

const PageRenderer: React.FC<PageRendererProps> = ({ siteData, selectedComponentId, onSelectComponent, onRemoveComponent, onMoveComponent }) => {
  const renderComponent = (component: PageComponent) => {
    const dummyOnSelect = () => {};
    
    switch (component.type) {
      case 'Hero':
        return <HeroSection data={component} globalData={siteData.global} onSelectElement={dummyOnSelect} />;
      case 'CategoryShowcase':
        return <CategoryShowcase data={component} onSelectElement={dummyOnSelect} />;
      case 'BestSellers':
        return <BestSellers data={component} globalData={siteData.global} onSelectElement={dummyOnSelect} />;
      case 'FullWidthCta':
        return <FullWidthCTA data={component} onSelectElement={dummyOnSelect} />;
      case 'Testimonials':
        return <Testimonials data={component} onSelectElement={dummyOnSelect} />;
      case 'LatestPosts':
        return <LatestPosts data={component} onSelectElement={dummyOnSelect} />;
      case 'EmailCTA':
        return <EmailCTA data={component} onSelectElement={dummyOnSelect} />;
      default:
        const _exhaustiveCheck: never = component;
        return <div>Unknown component type: {(_exhaustiveCheck as any).type}</div>;
    }
  };

  return (
    <div className="bg-white">
      {/* RENDER HEADER */}
      <TemplateHeader
        data={siteData.header}
        globalData={siteData.global}
        onSelectElement={() => onSelectComponent(siteData.header.id)}
      />

      {/* RENDER PAGE COMPONENTS */}
      <main>
        {siteData.page.map((component) => (
          <ComponentWrapper
            key={component.id}
            isSelected={selectedComponentId === component.id}
            onSelect={() => onSelectComponent(component.id)}
            onRemove={() => onRemoveComponent(component.id)}
            onMove={(direction) => onMoveComponent(component.id, direction)}
          >
            {renderComponent(component)}
          </ComponentWrapper>
        ))}
      </main>

      {/* RENDER FOOTER */}
      <TemplateFooter
        data={siteData.footer}
        globalData={siteData.global}
        onSelectElement={() => onSelectComponent(siteData.footer.id)}
      />
    </div>
  );
};

export default PageRenderer;