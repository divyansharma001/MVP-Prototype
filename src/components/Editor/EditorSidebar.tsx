import React from 'react';
import type { BakeryTemplateData } from '../../templates/BakeryTemplate';
import { X } from 'lucide-react'; 
import Button from '../UI/Button';

interface EditorSidebarProps {
  data: BakeryTemplateData;
  onUpdate: (path: string, value: any) => void;
  selectedElement: string | null;
  onSelectElement: (elementId: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({ data, onUpdate, selectedElement, onSelectElement, isOpen, onClose }) => {
  const renderControls = () => {
    if (!selectedElement) {
        return <p>Click an element to edit</p>;
    }
    if (selectedElement.startsWith('global')) {
        return (
            <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2 border-b border-gray-700 pb-2">Global Settings</h3>
                <div>
                    <label className="text-sm font-medium text-gray-400">Bakery Name</label>
                    <input type="text" value={data.global.bakeryName} onChange={(e) => onUpdate('global.bakeryName', e.target.value)}
                        className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-md border border-gray-600"/>
                </div>
                 <div>
                    <label className="text-sm font-medium text-gray-400">Primary Color</label>
                    <select value={data.global.primaryColor} onChange={(e) => onUpdate('global.primaryColor', e.target.value)}
                        className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-md border border-gray-600">
                        <option value="orange">Orange</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="rose">Rose</option>
                    </select>
                </div>
            </div>
        );
    }
    if (selectedElement.startsWith('hero.mainHeading')) {
       return (
         <div>
            <label className="text-sm font-medium text-gray-400">Main Heading</label>
            <textarea value={data.hero.mainHeading} onChange={(e) => onUpdate('hero.mainHeading', e.target.value)} rows={3}
                className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-md border border-gray-600"/>
        </div>
       )
    }
    return <p className="text-gray-400">Controls for "{selectedElement}" will appear here.</p>;
  };

  return (
    <>
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-20" onClick={onClose}></div>}

      <aside 
        className={`
            bg-gray-800 border-r border-gray-700 flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out
            
            fixed top-0 left-0 h-full w-80 z-30 lg:relative lg:z-auto lg:w-80 lg:translate-x-0
            
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-xl font-bold">Editor Panel</h2>
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