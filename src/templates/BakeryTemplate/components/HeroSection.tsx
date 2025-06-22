import React from 'react';

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
  };
  primaryColor: string;
  onSelectElement: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data, primaryColor, onSelectElement }) => {
  const commonClasses = "cursor-pointer transition-all duration-200 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-teal-400 rounded-sm";
  return (
    <div className="relative h-96 bg-cover bg-center text-white" style={{ backgroundImage: `url(${data.image})` }}>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h1 
          className={`text-5xl font-bold drop-shadow-lg ${commonClasses}`}
          onClick={(e) => { e.stopPropagation(); onSelectElement('hero.title'); }}
        >
          {data.title || 'The Artisan Bakery'}
        </h1>
        <p 
          className={`mt-4 text-lg drop-shadow-md ${commonClasses}`}
          onClick={(e) => { e.stopPropagation(); onSelectElement('hero.subtitle'); }}
        >
          {data.subtitle || 'Freshly Baked Goods, Made With Love'}
        </p>
        <button className={`mt-6 px-8 py-3 bg-${primaryColor} rounded-full font-semibold hover:opacity-90 transition-opacity`}>
          Order Online
        </button>
      </div>
    </div>
  );
};


export default HeroSection;