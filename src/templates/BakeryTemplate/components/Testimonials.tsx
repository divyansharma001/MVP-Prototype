import React from 'react';
import { Star } from 'lucide-react';
import type { BakeryTemplateData } from '..';

interface Props {
  data: BakeryTemplateData['testimonials'];
  onSelectElement: (id: string) => void;
}

const Testimonials: React.FC<Props> = ({ data, onSelectElement }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          We Care About Our Customers <span className="text-orange-500">Experience Too</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <div key={index} className="text-center cursor-pointer" onClick={() => onSelectElement(`testimonials.${index}`)}>
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
              <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;