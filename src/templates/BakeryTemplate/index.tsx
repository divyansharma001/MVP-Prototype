import React from 'react';
import TemplateHeader from './components/TemplateHeader';
import HeroSection from './components/HeroSection';
import CategoryShowcase from './components/CategoryShowcase';
import BestSellers from './components/BestSellers';
import FullWidthCTA from './components/FullWidthCTA';
import Testimonials from './components/Testimonials';
import EmailCTA from './components/EmailCTA';
import TemplateFooter from './components/TemplateFooter';



// 1. THE NEW, COMPREHENSIVE DATA STRUCTURE
export interface BakeryTemplateData {
  global: {
    bakeryName: string;
    logoUrl: string;
    primaryColor: 'orange' | 'blue' | 'green' | 'rose';
    font: 'lato' | 'montserrat' | 'playfair';
  };
  header: {
    phone: string;
    email: string;
    navLinks: { title: string; href: string; }[];
  };
  hero: {
    preHeading: string;
    mainHeading: string;
    featuredProduct: {
      name: string;
      description: string;
      image: string;
    };
    primaryCtaText: string;
    secondaryCtaText: string;
    backgroundImage: string;
  };
  categories: {
      title: string;
      image: string;
      description: string;
  }[];
  bestSellers: {
      id: string;
      name: string;
      price: number;
      rating: number;
      image: string;
      sale?: boolean;
  }[];
  fullWidthCta: {
      preHeading: string;
      heading: string;
      image: string;
  };
  testimonials: {
      name: string;
      company: string;
      quote: string;
      image: string;
  }[];
  emailCta: {
      preHeading: string;
      heading: string;
      backgroundImage: string;
  };
}

interface BakeryTemplateProps {
  data: BakeryTemplateData;
  onSelectElement: (id: string) => void;
}

// 2. THE COMPONENT THAT ASSEMBLES EVERYTHING
const BakeryTemplate: React.FC<BakeryTemplateProps> = ({ data, onSelectElement }) => {
  // We can add logic here to switch font families later
  return (
    <div className="bg-white text-gray-800">
      <TemplateHeader data={data.header} globalData={data.global} onSelectElement={onSelectElement} />
      <main>
        <HeroSection data={data.hero} globalData={data.global} onSelectElement={onSelectElement} />
        <CategoryShowcase data={data.categories} onSelectElement={onSelectElement} />
        <BestSellers data={data.bestSellers} globalData={data.global} onSelectElement={onSelectElement} />
        <FullWidthCTA data={data.fullWidthCta} onSelectElement={onSelectElement} />
        <Testimonials data={data.testimonials} onSelectElement={onSelectElement} />
        <EmailCTA data={data.emailCta} onSelectElement={onSelectElement} />
      </main>
      <TemplateFooter globalData={data.global} onSelectElement={onSelectElement} />
    </div>
  );
};

export default BakeryTemplate;