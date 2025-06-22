import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BakeryTemplate, { BakeryTemplateData } from '../templates/BakeryTemplate';
import Button from '../components/UI/Button';
import { useWebsites } from '../contexts/WebsiteContext';
import { useToast } from '../components/UI/Toast';
import { Save, Edit } from 'lucide-react';

const Preview: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addWebsite } = useWebsites();
  const { showToast } = useToast();

  const formData = location.state?.formData as BakeryTemplateData;

  if (!formData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-2xl">No data to preview.</h1>
        <Button onClick={() => navigate('/builder')} className="mt-4">
          Go to Builder
        </Button>
      </div>
    );
  }
  
  const handleSave = () => {
    const newSite = {
      id: new Date().toISOString(),
      name: formData.businessName,
      url: `${formData.businessName.toLowerCase().replace(/\s+/g, '-')}.webcraft.site`,
      status: 'live' as const,
      visits: Math.floor(Math.random() * 3000), 
      lastUpdated: '1m ago',
      thumbnail: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=400', 
      growth: parseFloat((Math.random() * 20 - 5).toFixed(1)), 
    };

    addWebsite(newSite);
    showToast('success', `${formData.businessName} has been saved!`);
    navigate('/dashboard');
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md p-4 flex justify-between items-center shadow-lg">
        <div>
          <p className="text-white font-bold">Preview Mode</p>
          <p className="text-sm text-gray-400">This is how your website will look.</p>
        </div>
        <div className="flex space-x-2">
            <Button variant="secondary" onClick={() => navigate('/builder', { state: { formData } })} icon={Edit}>
                Edit
            </Button>
            <Button variant="gradient" onClick={handleSave} icon={Save}>
                Save & Go to Dashboard
            </Button>
        </div>
      </div>

      <BakeryTemplate data={formData} />
    </div>
  );
};

export default Preview;