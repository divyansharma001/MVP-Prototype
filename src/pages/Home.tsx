import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Globe } from 'lucide-react';
import Button from '../components/UI/Button';
import { useToast } from '../components/UI/Toast';

// A new, dedicated header for the marketing page
const MarketingHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-white p-1.5 rounded-lg">
              <Globe className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white">WebCraft</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Product</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Tools</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <div className="flex items-center space-x-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
              <span className="bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md">New</span>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>Log in</Button>
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex !bg-gray-800 hover:!bg-gray-700">Talk to Sales</Button>
          <Button variant="primary" size="sm" className="!bg-white !text-black hover:!bg-gray-200">Get Started for Free</Button>
        </div>
      </div>
    </header>
  );
};

// Data for the showcase grid on the right
const showcaseItems = {
  main: {
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Look good, feel amazing',
    cta: 'SHOP NOW'
  },
  sideTop: {
    image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Clouds'
  },
  sideBottom: {
    image: 'https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Treat Your Hair With the Kindness It Needs'
  },
  bottom: {
    image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Maré'
  }
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleGenerateWebsite = () => {
    showToast('success', 'Redirecting to the AI Website Builder!');
    setTimeout(() => navigate('/builder'), 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <MarketingHeader />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Hero Text */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-400">
              From vision to growing business
            </motion.p>
            <motion.h1 variants={itemVariants} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              One AI platform to build, host and scale your website.
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Generate stunning websites, host them on the most reliable platform, and scale with one intelligent AI solution.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <Button
                size="lg"
                onClick={handleGenerateWebsite}
                className="!bg-indigo-600 hover:!bg-indigo-500 !text-white !text-base !font-semibold !px-8 !py-4"
              >
                Generate AI Website
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Showcase Grid */}
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            {/* The Grid Layout */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-4">
              <motion.div className="col-span-2 row-span-2 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden" whileHover={{ scale: 1.05, zIndex: 10 }}>
                <img src={showcaseItems.sideTop.image} alt="Side Top" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div className="col-span-3 row-span-2 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden relative" whileHover={{ scale: 1.05, zIndex: 10 }}>
                <img src={showcaseItems.main.image} alt="Main" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{showcaseItems.main.title}</h3>
                  <button className="mt-2 text-xs font-bold bg-white/90 text-black px-4 py-2 rounded-md self-start">
                    {showcaseItems.main.cta}
                  </button>
                </div>
              </motion.div>
              
              <div className="col-span-2 row-span-1 flex flex-col gap-4">
                <motion.div className="flex-1 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-4" whileHover={{ scale: 1.05, zIndex: 10 }}>
                    <p className="text-xs text-gray-400">yourdomain.org</p>
                    <div className="my-1.5 px-3 py-1.5 bg-black rounded-lg border border-gray-600 text-white text-xs flex items-center gap-2">
                        <Globe className="w-4 h-4" /> yourdomain.com
                    </div>
                    <p className="text-xs text-gray-400">studiovibes.org</p>
                </motion.div>
                <motion.div className="flex-1 rounded-2xl bg-green-500/80 flex items-center justify-center" whileHover={{ scale: 1.05, zIndex: 10 }}>
                    <ShieldCheck className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <motion.div className="col-span-3 row-span-1 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden" whileHover={{ scale: 1.05, zIndex: 10 }}>
                <img src={showcaseItems.bottom.image} alt="Bottom" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Floating Star Icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0.2) 60%, rgba(79,70,229,0) 100%)',
              }}
              animate={{ y: ["-5%", "5%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-indigo-500/50">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;