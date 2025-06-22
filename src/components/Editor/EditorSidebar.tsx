import React from 'react';
import type { SiteData, HeroData, BestSellersData } from '../../types/page-builder';
import { X } from 'lucide-react';
import Button from '../UI/Button';

interface EditorSidebarProps {
  siteData: SiteData;
  setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
  onUpdateComponent: (componentId: string, newProps: Partial<any>) => void;
  selectedComponentId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const FormInput = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
        <label className="text-xs font-medium text-gray-400 block mb-1.5">{label}</label>
        <input {...props} className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"/>
    </div>
);

const FormTextarea = ({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <div>
        <label className="text-xs font-medium text-gray-400 block mb-1.5">{label}</label>
        <textarea {...props} className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"/>
    </div>
);

const FormImageUpload = ({ label, value, onChange }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div>
        <label className="text-xs font-medium text-gray-400 block mb-1.5">{label}</label>
        <div className="flex items-center gap-2">
            <img src={value} alt="preview" className="w-10 h-10 object-cover rounded-md bg-gray-700"/>
            <input type="text" value={value} onChange={onChange} placeholder="Enter image URL" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"/>
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2">{children}</h3>
);


const EditorSidebar: React.FC<EditorSidebarProps> = ({ siteData, setSiteData, onUpdateComponent, selectedComponentId, isOpen, onClose }) => {
  const renderControls = () => {
    const selectedComponent = siteData.page.find(c => c.id === selectedComponentId);

    if (!selectedComponentId && !selectedComponent) {
      return (
        <>
            <SectionTitle>Global Site Settings</SectionTitle>
            <div className="space-y-4">
                <FormInput label="Bakery Name" value={siteData.global.bakeryName} onChange={(e) => setSiteData(prev => ({...prev, global: {...prev.global, bakeryName: e.target.value}}))} />
            </div>
        </>
      );
    }

    if (selectedComponent?.type === 'Hero') {
        const componentData = selectedComponent as HeroData;
        return (
            <>
                <SectionTitle>Hero Section</SectionTitle>
                <div className="space-y-4">
                    <FormInput label="Pre-Heading" value={componentData.preHeading} 
                        onChange={(e) => onUpdateComponent(selectedComponent.id, { preHeading: e.target.value })} />
                    <FormTextarea label="Main Heading" value={componentData.mainHeading} rows={3}
                        onChange={(e) => onUpdateComponent(selectedComponent.id, { mainHeading: e.target.value })}/>
                    <FormImageUpload label="Background Image URL" value={componentData.backgroundImage} 
                        onChange={(e) => onUpdateComponent(selectedComponent.id, { backgroundImage: e.target.value })}/>
                </div>
            </>
        )
    }

    if (selectedComponent?.type === 'BestSellers') {
        const componentData = selectedComponent as BestSellersData;
        return (
             <>
                <SectionTitle>Best Sellers</SectionTitle>
                <div className="space-y-4">
                    <FormInput label="Pre-Heading" value={componentData.preHeading}
                        onChange={(e) => onUpdateComponent(selectedComponent.id, { preHeading: e.target.value })} />
                    <FormInput label="Heading" value={componentData.heading}
                        onChange={(e) => onUpdateComponent(selectedComponent.id, { heading: e.target.value })} />
                </div>
            </>
        )
    }

    return <p className="text-gray-400 text-sm text-center mt-8">Click an element on the website preview to start editing.</p>;
  };

  return (
    <>
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30" onClick={onClose}></div>}
      <aside 
        className={`
            bg-gray-800 flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out
            fixed top-0 left-0 h-full w-full max-w-sm z-40 lg:relative lg:z-auto lg:w-80 lg:translate-x-0
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 flex-shrink-0 flex justify-between items-center border-b border-gray-700 bg-gray-800">
            <h2 className="text-base font-semibold">Editor Panel</h2>
            <Button variant="ghost" className="lg:hidden !p-2" onClick={onClose}>
                <X className="h-5 w-5"/>
            </Button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
            {renderControls()}
        </div>
      </aside>
    </>
  );
};

export default EditorSidebar;


