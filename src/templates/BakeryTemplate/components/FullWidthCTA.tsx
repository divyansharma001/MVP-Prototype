import React from 'react';
import type { BakeryTemplateData } from '..';

interface Props {
  data: BakeryTemplateData['fullWidthCta'];
  onSelectElement: (id: string) => void;
}

const FullWidthCTA: React.FC<Props> = ({ data, onSelectElement }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden grid md:grid-cols-2 items-center min-h-[400px]" onClick={() => onSelectElement('fullWidthCta')}>
        <div className="relative z-10 md:text-left text-center">
          <p className="font-dancing text-3xl text-orange-400">{data.preHeading}</p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-extrabold mt-2">{data.heading}</h2>
          <button className="mt-8 bg-[#F9A229] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">Shop Now</button>
        </div>
        <img src={data.image} alt="CTA background" className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-100 md:relative md:rounded-r-3xl" />
      </div>
    </section>
  );
};

export default FullWidthCTA;