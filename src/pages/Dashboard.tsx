// src/pages/Dashboard.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Globe, AlertTriangle } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import { useToast } from '../components/UI/Toast';
import { useWebsites, Website } from '../contexts/WebsiteContext';
import { useNavigate } from 'react-router-dom';

import OverviewStats from '../components/Dashboard/OverviewStats';
import WebsiteCard from '../components/Dashboard/WebsiteCard';

const Dashboard: React.FC = () => {
  const { showToast } = useToast();
  const { websites, deleteWebsite } = useWebsites();
  const navigate = useNavigate();

  const [siteToDelete, setSiteToDelete] = useState<Website | null>(null);

  const handleCreateWebsite = () => {
    showToast('info', 'Redirecting to the AI website builder...');
    setTimeout(() => navigate('/builder'), 1000);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteRequest = (id: string, name: string) => {
      const site = websites.find(s => s.id === id);
      if (site) {
          setSiteToDelete(site);
      }
  };

  const confirmDelete = () => {
    if (siteToDelete) {
      deleteWebsite(siteToDelete.id);
      showToast('success', `Website "${siteToDelete.name}" has been deleted.`);
      setSiteToDelete(null);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, here's your website overview.</p>
        </div>
        <Button variant="gradient" icon={Plus} onClick={handleCreateWebsite}>
          Create New Site
        </Button>
      </motion.div>

      <div className="space-y-8">
        <OverviewStats websites={websites} />

        <div>
            <h2 className="text-xl font-semibold text-white mb-4">Your Websites</h2>
            {websites.length === 0 ? (
                <Card className="p-12 text-center">
                    <Globe className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">Your space is empty!</h3>
                    <p className="text-gray-400 mb-6">Create your first website to get started.</p>
                    <Button onClick={handleCreateWebsite} variant="primary">
                        Start with AI <Sparkles className="h-4 w-4 ml-2"/>
                    </Button>
                </Card>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <AnimatePresence>
                        {websites.map((website) => (
                            <WebsiteCard key={website.id} website={website} onDelete={handleDeleteRequest} />
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!siteToDelete}
        onClose={() => setSiteToDelete(null)}
        title="Confirm Deletion"
        size="sm"
      >
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-500/10">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <p className="text-gray-300 mt-4">
            Are you sure you want to delete the website{' '}
            <strong className="text-white">"{siteToDelete?.name}"</strong>?
          </p>
          <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Button variant="secondary" onClick={() => setSiteToDelete(null)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;