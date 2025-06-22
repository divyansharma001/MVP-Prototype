import React from 'react';


export interface BakeryTemplateData {
  businessName: string;
  businessType: string; 
  description: string;
  style: string; 
  colors: string; 
  features: string[];
  pages: string[];
}

import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';

const colorMap: { [key: string]: string } = {
  'Ocean Blue': 'blue-500',
  'Forest Green': 'green-500',
  'Sunset Orange': 'orange-500',
  'Royal Purple': 'purple-500',
  'Classic Gray': 'gray-500',
};

const BakeryTemplate: React.FC<{ data: BakeryTemplateData }> = ({ data }) => {
  const primaryColor = colorMap[data.colors] || 'teal-500';
  const heroImage = 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  return (
    <div className="font-sans">
      <HeroSection 
        businessName={data.businessName} 
        heroImage={heroImage} 
        primaryColor={primaryColor} 
      />

      <MenuSection primaryColor={primaryColor} menuItems={[]} />
    </div>
  );
};

export default BakeryTemplate;