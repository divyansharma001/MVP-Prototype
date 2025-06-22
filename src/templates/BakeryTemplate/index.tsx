import React from 'react';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';

export interface BakeryTemplateData {
  businessName: string;
  businessType: string;
  description: string;
  style: string;
  colors: string;
  features: string[];
  pages: string[];
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  menu: {
    title: string;
    items: { name: string; description: string; price: string; }[]
  };
}

interface BakeryTemplateProps {
  data: BakeryTemplateData;
  onSelectElement: (id: string) => void;
}

const colorMap: { [key: string]: string } = {
  'Ocean Blue': 'blue-500',
  'Forest Green': 'green-500',
  'Sunset Orange': 'orange-500',
  'Royal Purple': 'purple-500',
  'Classic Gray': 'gray-500',
};
const BakeryTemplate: React.FC<BakeryTemplateProps> = ({ data, onSelectElement }) => {
  const primaryColor = colorMap[data.colors] || 'teal-500';

  return (
    <div className="font-sans">
      <HeroSection 
        data={data.hero}
        primaryColor={primaryColor} 
        onSelectElement={onSelectElement}
      />


      <MenuSection primaryColor={primaryColor} menuItems={[]} />
    </div>
  );
};

export default BakeryTemplate;