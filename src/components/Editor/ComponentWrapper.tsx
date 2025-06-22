import React from 'react';
import { ArrowUp, ArrowDown, Trash2 } from 'lucide-react';

interface ComponentWrapperProps {
  children: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  onMove: (direction: 'up' | 'down') => void;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ children, isSelected, onSelect, onRemove, onMove }) => {
  return (
    <div 
      className={`relative p-1 md:p-2 transition-all duration-200 border-2 ${isSelected ? 'border-blue-500' : 'border-transparent hover:border-blue-500/30'}`}
      onClick={(e) => { e.stopPropagation(); onSelect(); }}
    >
      {isSelected && (
        <div 
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 p-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <button title="Move Up" onClick={() => onMove('up')} className="bg-gray-700 text-white p-1.5 rounded-md hover:bg-gray-600">
            <ArrowUp size={14} />
          </button>
          <button title="Move Down" onClick={() => onMove('down')} className="bg-gray-700 text-white p-1.5 rounded-md hover:bg-gray-600">
            <ArrowDown size={14} />
          </button>
          <div className="w-px h-5 bg-gray-600 mx-1"></div>
          <button title="Delete" onClick={onRemove} className="bg-red-500 text-white p-1.5 rounded-md hover:bg-red-600">
            <Trash2 size={14} />
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default ComponentWrapper;