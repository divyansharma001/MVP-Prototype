import React from 'react';
import { X, LayoutTemplate, Star, MessageSquareText, Image, Mail, Columns } from 'lucide-react';
// Import the full component union type
import type { PageComponent } from '../../types/page-builder';

interface AddComponentPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onAddComponent: (type: PageComponent['type'], index: number) => void;
}

const componentLibrary = [
    { type: 'Hero' as const, name: 'Hero Section', icon: LayoutTemplate },
    // { type: 'CategoryShowcase' as const, name: 'Category Grid', icon: Columns },
    { type: 'BestSellers' as const, name: 'Best Sellers', icon: Star },
    { type: 'FullWidthCta' as const, name: 'Full Width CTA', icon: Image },
    { type: 'Testimonials' as const, name: 'Testimonials', icon: MessageSquareText },
    { type: 'LatestPosts' as const, name: 'Latest Posts', icon: LayoutTemplate },
    { type: 'EmailCta' as const, name: 'Email CTA', icon: Mail },
];

const AddComponentPanel: React.FC<AddComponentPanelProps> = ({ isOpen, onClose, onAddComponent }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg m-4" onClick={e => e.stopPropagation()}>
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <h3 className="font-semibold">Add a New Section</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded-full"><X size={20}/></button>
                </div>
                <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {componentLibrary.map(comp => (
                        <div key={comp.type} onClick={() => { 
                            onAddComponent(comp.type, -1);
                            onClose(); 
                        }} 
                            className="bg-gray-700 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-600 hover:text-teal-400 transition-colors">
                            <comp.icon className="mx-auto h-8 w-8 mb-2 opacity-80" />
                            <p className="text-sm font-medium">{comp.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddComponentPanel;