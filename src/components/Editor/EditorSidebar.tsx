import React from 'react';
import type { BakeryTemplateData } from '../../templates/BakeryTemplate';

interface EditorSidebarProps {
  data: BakeryTemplateData;
  onUpdate: (path: string, value: any) => void;
  selectedElement: string | null;
  onSelectElement: (elementId: string | null) => void;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({ data, onUpdate, selectedElement }) => {
  const renderControls = () => {
    switch (selectedElement) {
      case 'hero.title':
        return (
          <div>
            <label className="text-sm font-medium text-gray-400">Hero Title</label>
            <input
              type="text"
              value={data.hero.title}
              onChange={(e) => onUpdate('hero.title', e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        );
      case 'hero.subtitle':
        return (
          <div>
            <label className="text-sm font-medium text-gray-400">Hero Subtitle</label>
            <input
              type="text"
              value={data.hero.subtitle}
              onChange={(e) => onUpdate('hero.subtitle', e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        );
        case 'global.colors':
            return (
                <div>
                    <label className="text-sm font-medium text-gray-400">Primary Color</label>
                    <select
                        value={data.colors}
                        onChange={(e) => onUpdate('colors', e.target.value)}
                        className="w-full mt-1 px-3 py-2 bg-gray-700 rounded-md border border-gray-600"
                    >
                        <option value="Ocean Blue">Ocean Blue</option>
                        <option value="Forest Green">Forest Green</option>
                        <option value="Sunset Orange">Sunset Orange</option>
                    </select>
                </div>
            )
      default:
        return <p className="text-gray-400">Click on an element in the preview to edit it.</p>;
    }
  };

  return (
    <aside className="w-80 bg-gray-800 p-4 border-r border-gray-700 flex-shrink-0 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Editor</h2>
      <div className="flex-1 space-y-4">
        {renderControls()}
      </div>
    </aside>
  );
};

export default EditorSidebar;