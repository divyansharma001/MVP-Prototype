import React from 'react';
import type { HeroData, GlobalSettings } from '../../../types/page-builder';

interface HeroSectionProps {
  data: HeroData;
  globalData: GlobalSettings;
  onSelectElement: (id: string) => void;
}

const colorVariants = {
    orange: 'bg-[#F9A229] hover:bg-[#EAA034]',
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600',
    rose: 'bg-rose-500 hover:bg-rose-600',
};

const HeroSection: React.FC<HeroSectionProps> = ({ data, globalData, onSelectElement }) => {
  const selectableClass = "cursor-pointer transition-all duration-200 hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-dashed hover:outline-blue-500 rounded";

  const backgroundPatternUrl = `url("https://phlox.pro/wp-content/uploads/2021/03/bakery-pattern.svg")`;

  return (
    <section 
      className="relative bg-[#F9F6F1] rounded-b-[40px] lg:rounded-b-[60px] overflow-hidden"
      style={{ backgroundImage: backgroundPatternUrl, backgroundPosition: 'center', backgroundRepeat: 'repeat' }}
      onClick={() => onSelectElement('hero')}
    >
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <p 
            className={`font-dancing text-4xl text-[#F9A229] mb-2 ${selectableClass}`}
            onClick={e => { e.stopPropagation(); onSelectElement('hero.preHeading'); }}
          >
            {data.preHeading}
          </p>
          <h1 
            className={`text-5xl lg:text-7xl font-playfair font-bold text-gray-900 tracking-tight leading-tight ${selectableClass}`}
            onClick={e => { e.stopPropagation(); onSelectElement('hero.mainHeading'); }}
          >
            {data.mainHeading}
          </h1>
          
          <div className={`mt-10 p-4 inline-flex items-center gap-4 bg-white/60 rounded-full shadow-md ${selectableClass}`}
            onClick={e => { e.stopPropagation(); onSelectElement('hero.featuredProduct'); }}
          >
            <img src={data.featuredProduct.image} alt={data.featuredProduct.name} className="w-16 h-16 rounded-full object-cover border-4 border-white" />
            <div>
                <h3 className="font-bold text-gray-800 font-playfair">{data.featuredProduct.name}</h3>
                <p className="text-gray-600 text-sm">{data.featuredProduct.description}</p>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
             <button className={`${colorVariants[globalData.primaryColor]} text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 ${selectableClass}`}
                onClick={e => { e.stopPropagation(); onSelectElement('hero.primaryCtaText'); }}
             >
                {data.primaryCtaText}
             </button>
             <button className={`bg-gray-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 ${selectableClass}`}
                onClick={e => { e.stopPropagation(); onSelectElement('hero.secondaryCtaText'); }}
             >
                {data.secondaryCtaText}
             </button>
          </div>
        </div>

        <div className="relative h-80 lg:h-[500px]">
            <img 
                src={data.backgroundImage} 
                alt="Bakery hero" 
                className="w-full h-full object-contain"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;