import React from 'react';
import { Phone, Mail, Search, ShoppingBag } from 'lucide-react';
import type { BakeryTemplateData } from '..';

interface Props {
  data: BakeryTemplateData['header'];
  globalData: BakeryTemplateData['global'];
  onSelectElement: (id: string) => void;
}

const TemplateHeader: React.FC<Props> = ({ data, globalData, onSelectElement }) => {
  const selectableClass = "cursor-pointer hover:outline hover:outline-2 hover:outline-dashed hover:outline-blue-500 rounded";

  return (
    <header className="bg-white font-lato" onClick={() => onSelectElement('header')}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1">
            <div className={`flex items-center gap-2 ${selectableClass}`} onClick={e => {e.stopPropagation(); onSelectElement('header.phone')}}>
              <Phone size={14} />
              <span>{data.phone}</span>
            </div>
            <div className={`flex items-center gap-2 ${selectableClass}`} onClick={e => {e.stopPropagation(); onSelectElement('header.email')}}>
              <Mail size={14} />
              <span>{data.email}</span>
            </div>
          </div>
          <div className="flex gap-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-orange-400">Login</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:text-orange-400">Signup</a>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`flex items-center gap-2 ${selectableClass}`} onClick={e => {e.stopPropagation(); onSelectElement('global')}}>
            <img src={globalData.logoUrl} alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-800 hidden sm:inline">{globalData.bakeryName}</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
            {data.navLinks.map((link, i) => (
              <a key={i} href={link.href} className={`hover:text-[#F9A229] ${selectableClass}`} onClick={e => {e.stopPropagation(); onSelectElement(`header.navLinks.${i}`)}}>{link.title}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Search size={20} className="text-gray-600 cursor-pointer hover:text-[#F9A229]" />
            <button className="flex items-center gap-2 bg-[#F9A229] bg-opacity-10 text-[#C47500] font-bold px-4 py-2 rounded-full hover:bg-opacity-20 transition">
              <ShoppingBag size={20} />
              <span className="hidden sm:inline">Basket (0)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TemplateHeader;