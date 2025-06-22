import React from 'react';
import { Star } from 'lucide-react';
import type { BestSellersData, GlobalSettings } from '../../../types/page-builder';


interface BestSellersProps {
  data: BestSellersData;
  globalData: GlobalSettings;
  onSelectElement: (id: string) => void;
}


const ProductCard: React.FC<{ product: BestSellersData['products'][0], onSelect: () => void }> = ({ product, onSelect }) => {
    return (
        <div className="bg-[#F9F6F1] rounded-3xl p-6 text-center group cursor-pointer" onClick={onSelect}>
        <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 transition-transform group-hover:scale-105" />
            {product.sale && <span className="absolute top-0 right-0 bg-[#F9A229] text-white text-xs font-bold px-3 py-1 rounded-full">Sale!</span>}
        </div>
        <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className={` ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
        </div>
        <h3 className="font-bold font-playfair text-lg text-gray-800">{product.name}</h3>
        <p className="font-semibold text-gray-600">${product.price.toFixed(2)}</p>
        </div>
    )
}
const BestSellers: React.FC<BestSellersProps> = ({ data, globalData, onSelectElement }) => {
  const colorVariants = {
    orange: 'text-[#F9A229]',
    blue: 'text-blue-500',
    green: 'text-green-500',
    rose: 'text-rose-500',
  };
 return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
            <p className="font-dancing text-3xl text-[#F9A229]">{data.preHeading}</p>
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mt-1">{data.heading}</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.products.map((product, index) => (
            <ProductCard key={product.id} product={product} onSelect={() => onSelectElement(`bestSellers.products.${index}`)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;