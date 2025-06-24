import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, PanelLeft, Plus, Monitor, Tablet, Smartphone } from 'lucide-react';

import { useSiteData } from '../hooks/useSiteData';
import { useToast } from '../components/UI/Toast';
import { useWebsites } from '../contexts/WebsiteContext';

import Button from '../components/UI/Button';
import EditorSidebar from '../components/Editor/EditorSidebar';
import AddComponentPanel from '../components/Editor/AddComponentPanel';
import IframePreview from '../components/Editor/IframePreview';

type Viewport = 'desktop' | 'tablet' | 'mobile';

const Editor: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { addWebsite } = useWebsites();

  const {
    siteData,
    setSiteData,
    addComponent,
    removeComponent,
    updateComponent,
    moveComponent,
  } = useSiteData();

  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddComponentPanelOpen, setAddComponentPanelOpen] = useState(false);
  const [viewport, setViewport] = useState<Viewport>('desktop');

  const handleSave = () => {

    const newSite = {
      id: new Date().toISOString(),
      name: siteData.global.bakeryName,
      url: `${siteData.global.bakeryName.toLowerCase().replace(/\s+/g, '-')}.webcraft.site`,
      status: 'live' as const,
      visits: Math.floor(Math.random() * 3000),
      lastUpdated: '1m ago',
      thumbnail: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      growth: parseFloat((Math.random() * 20 - 5).toFixed(1)),
    };
    addWebsite(newSite);
    showToast('success', `Website "${siteData.global.bakeryName}" saved!`);
    navigate('/dashboard');
  };
  
  const viewportContainerStyles = {
    desktop: 'w-full h-full',
    tablet: 'w-[768px] h-[90%] max-h-[1024px] rounded-lg shadow-2xl',
    mobile: 'w-[390px] h-[700px] rounded-lg shadow-2xl border-8 border-black',
  };

  return (
    <div className="relative flex h-screen bg-gray-900 text-white lg:flex-row flex-col overflow-hidden">
      <EditorSidebar
        siteData={siteData}
        setSiteData={setSiteData}
        selectedComponentId={selectedComponentId}
        onUpdateComponent={updateComponent}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <AddComponentPanel
        isOpen={isAddComponentPanelOpen}
        onClose={() => setAddComponentPanelOpen(false)}
        onAddComponent={(type) => addComponent(type, siteData.page.length)}
      />

      <main className="flex-1 flex flex-col h-full bg-gray-800">
        <div className="flex-shrink-0 bg-gray-900 px-4 py-2 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="lg:hidden !p-2" onClick={() => setIsSidebarOpen(true)}><PanelLeft className="h-5 w-5"/></Button>
                <div className="w-px h-6 bg-gray-700 hidden lg:block"></div>
                <Button variant="ghost" size="sm" icon={Plus} onClick={() => setAddComponentPanelOpen(true)}>Add</Button>
            </div>
            <div className="hidden lg:flex items-center gap-2 p-1 bg-gray-800 rounded-lg">
                <button title="Desktop View" onClick={() => setViewport('desktop')} className={`p-1.5 rounded-md transition-colors ${viewport === 'desktop' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}><Monitor size={20} /></button>
                <button title="Tablet View" onClick={() => setViewport('tablet')} className={`p-1.5 rounded-md transition-colors ${viewport === 'tablet' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}><Tablet size={20} /></button>
                <button title="Mobile View" onClick={() => setViewport('mobile')} className={`p-1.5 rounded-md transition-colors ${viewport === 'mobile' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}><Smartphone size={20} /></button>
            </div>
            <div className="flex items-center space-x-3">
                {/* <Button variant="ghost" size="sm" icon={Eye}>Preview</Button> */}
                <Button variant="gradient" onClick={handleSave} icon={Save} size="sm">Save</Button>
            </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-gray-700/50 p-4 transition-all">
          <div className={`transition-all duration-300 ease-in-out bg-white ${viewportContainerStyles[viewport]}`}>
            <IframePreview
              siteData={siteData}
              selectedComponentId={selectedComponentId}
              onSelectComponent={(id) => {
                setSelectedComponentId(id);
                if (window.innerWidth < 1024) {
                  setIsSidebarOpen(true);
                }
              }}
              onRemoveComponent={removeComponent}
              onMoveComponent={moveComponent}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;