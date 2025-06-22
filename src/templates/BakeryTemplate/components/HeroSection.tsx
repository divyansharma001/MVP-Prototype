import React from 'react';

interface HeroSectionProps {
  businessName: string;
  heroImage: string;
  primaryColor: string; // e.g., 'teal-500'
}

const HeroSection: React.FC<HeroSectionProps> = ({ businessName, heroImage, primaryColor }) => {
  return (
    <div className="relative h-96 bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold drop-shadow-lg">{businessName || 'The Artisan Bakery'}</h1>
        <p className="mt-4 text-lg drop-shadow-md">Freshly Baked Goods, Made With Love</p>
        <button className={`mt-6 px-8 py-3 bg-${primaryColor} rounded-full font-semibold hover:opacity-90 transition-opacity`}>
          Order Online
        </button>
      </div>
    </div>
  );
};

export default HeroSection;