import React from 'react';
// FIX: Import the specific data type for this component
import type { CategoryShowcaseData } from '../../../types/page-builder';

interface Props {
  data: CategoryShowcaseData;
  onSelectElement: (id: string) => void;
}

const CategoryShowcase: React.FC<Props> = ({ data, onSelectElement }) => {
  // A helper to safely get a category or a default placeholder
  const getCategory = (index: number) => {
    return data.categories[index] || {
      tag: 'New Category',
      title: 'Click to Edit',
      description: 'Add a description for your category.',
      image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600'
    };
  };

  const cat1 = getCategory(0);
  const cat2 = getCategory(1);
  const cat3 = getCategory(2);

  return (
    <section className="py-24 bg-white" onClick={() => onSelectElement(data.id)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="font-dancing text-3xl text-[#F9A229]">{data.preHeading}</p>
          <h2 className="text-5xl font-playfair font-bold text-gray-900 mt-1">{data.heading}</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
            {/* Card 1: Donut */}
            <div className="lg:col-span-3 bg-gray-800 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer flex items-center" onClick={(e) => { e.stopPropagation(); onSelectElement(`categories.0`)}}>
                <img src={cat1.image} alt={cat1.title} className="absolute -left-24 -bottom-16 w-72 h-72 object-cover opacity-30 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10 ml-auto text-right">
                    <p className="text-lg font-semibold text-orange-400">{cat1.tag}</p>
                    <h3 className="text-4xl font-bold mt-2 font-playfair">{cat1.title}</h3>
                    <p className="mt-4 text-gray-300 max-w-xs ml-auto">{cat1.description}</p>
                    <button className="mt-6 bg-[#F9A229] text-white font-bold py-2 px-6 rounded-full transition-transform group-hover:scale-105">Browse Shop</button>
                </div>
            </div>
            {/* Card 2: Chocolate Cake */}
            <div className="lg:col-span-2 bg-gray-800 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer flex flex-col justify-end" onClick={(e) => { e.stopPropagation(); onSelectElement(`categories.1`)}}>
                 <img src={cat2.image} alt={cat2.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-500" />
                 <div className="relative z-10">
                    <p className="text-lg font-semibold text-orange-400">{cat2.tag}</p>
                    <h3 className="text-4xl font-bold mt-2 font-playfair">{cat2.title}</h3>
                    <p className="mt-4 text-gray-300">{cat2.description}</p>
                    <button className="mt-6 bg-[#F9A229] text-white font-bold py-2 px-6 rounded-full transition-transform group-hover:scale-105">Browse Shop</button>
                </div>
            </div>
            {/* Card 3: Croissant Image */}
            <div className="lg:col-span-2 bg-[#F9F6F1] rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-center items-center">
                <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="Croissant" className="w-48"/>
            </div>
            {/* Card 4: Choco Cherry */}
            <div className="lg:col-span-3 bg-[#F9F6F1] rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex items-center" onClick={(e) => { e.stopPropagation(); onSelectElement(`categories.2`)}}>
                <div className="relative z-10">
                    <p className="text-lg font-dancing text-[#F9A229]">{cat3.tag}</p>
                    <h3 className="text-4xl font-bold mt-2 font-playfair">{cat3.title}</h3>
                    <p className="mt-4 text-gray-600 max-w-xs">{cat3.description}</p>
                    <button className="mt-6 bg-[#F9A229] text-white font-bold py-2 px-6 rounded-full transition-transform group-hover:scale-105">Browse Shop</button>
                </div>
                <img src={cat3.image} alt={cat3.title} className="w-full sm:w-80 h-auto object-cover ml-auto hidden sm:block"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;