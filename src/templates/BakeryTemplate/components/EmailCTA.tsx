import React from 'react';
import type { BakeryTemplateData } from '..';

interface Props {
  data: BakeryTemplateData['emailCta'];
  onSelectElement: (id: string) => void;
}

const EmailCTA: React.FC<Props> = ({ data, onSelectElement }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-gray-800 rounded-3xl p-12 text-white text-center relative overflow-hidden flex items-center justify-center min-h-[400px]" onClick={() => onSelectElement('emailCta')}>
        <img src={data.backgroundImage} alt="CTA background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10">
          <p className="font-semibold text-lg text-orange-400">{data.preHeading}</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">{data.heading}</h2>
          <div className="mt-8 max-w-lg mx-auto flex">
            <input type="email" placeholder="Enter Your Email Address" className="w-full px-4 py-3 rounded-l-full text-gray-800 focus:outline-none" />
            <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-r-full hover:bg-orange-600">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCTA;