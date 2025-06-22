import React from 'react';
import { Instagram, Facebook, Twitter, MessageSquare, ArrowUp } from 'lucide-react';
import type { FooterData, GlobalSettings } from '../../../types/page-builder';

interface Props {
    // NEW: Add the specific data prop
    data: FooterData;
    globalData: GlobalSettings;
    onSelectElement: (id: string) => void;
}

const TemplateFooter: React.FC<Props> = ({ data, globalData, onSelectElement }) => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-10 relative font-lato">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Logo & Bio */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => onSelectElement('global')}>
                            <img src={globalData.logoUrl} alt="Logo" className="h-8 w-auto" />
                            <span className="text-xl font-bold text-gray-800">{globalData.bakeryName}</span>
                        </div>
                        <p className="text-gray-500 text-sm">Our bakery is dedicated to bringing you the freshest, most delicious handcrafted goods every day.</p>
                    </div>
                    {/* Column 2: Product */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-orange-500">Universal Cake</a></li>
                            <li><a href="#" className="hover:text-orange-500">Candy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Confectionery</a></li>
                            <li><a href="#" className="hover:text-orange-500">Gifts</a></li>
                        </ul>
                    </div>
                    {/* Column 3: About */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">About</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-orange-500">Our Mission</a></li>
                            <li><a href="#" className="hover:text-orange-500">Our Story</a></li>
                            <li><a href="#" className="hover:text-orange-500">Our Culture</a></li>
                            <li><a href="#" className="hover:text-orange-500">Team</a></li>
                        </ul>
                    </div>
                    {/* Column 4: Support */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-orange-500">Getting Started</a></li>
                            <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-orange-500">Suggest A Feature</a></li>
                            <li><a href="#" className="hover:text-orange-500">Report a Bug</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <p onClick={e => {e.stopPropagation(); onSelectElement('footer.copyrightText');}}>{data.copyrightText}</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-orange-500"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-orange-500"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-orange-500"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
            <button className="absolute bottom-6 right-6 bg-[#3B82F6] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
                <MessageSquare size={24} />
            </button>
            <button className="absolute -top-5 right-10 bg-gray-900 text-white p-3 rounded-full shadow-lg border-4 border-white hover:-translate-y-1 transition-transform">
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};

export default TemplateFooter;