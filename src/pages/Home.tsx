import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Zap, Palette, Award, Users, TrendingUp } from 'lucide-react';
import Button from '../components/UI/Button';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { BoxReveal } from '../components/magicui/box-reveal';

import Logo from '../components/UI/Logo';
import { useToast } from '../components/UI/Toast';
import Footer from '../components/Layout/Footer';
import InteractiveHeroDemo from '../components/Home/InteractiveHeroDemo';

import { BentoCard, BentoGrid } from '../components/magicui/bento-grid';
import { BuilderAnimation, PaletteAnimation, ChartAnimation } from '../components/Home/BentoFeatures';
import { BarChart3 } from 'lucide-react';
import { HyperText } from '../components/magicui/hypertext';

import UniqueCTA from '../components/Home/CTA';

// A new, dedicated header for the marketing page
const MarketingHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Logo />
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
          <Button variant="primary" size="sm" className="!bg-white !text-black hover:!bg-gray-200" onClick={() => navigate('/dashboard')}>Get Started for Free</Button>
        </div>
      </div>
    </header>
  );
};

// Data for the showcase grid on the right
// const showcaseItems = {
//   main: { image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Look good, feel amazing', cta: 'SHOP NOW' },
//   sideTop: { image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600' },
//   bottom: { image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600' }
// };


const bentoFeatures = [
  {
    Icon: Sparkles,
    name: "AI-Powered Builder",
    description: "Describe your business and watch our AI craft a stunning, unique website in minutes.",
    href: "#",
    cta: "Explore the Builder",
    className: "md:col-span-2",
    background: <BuilderAnimation />,
  },
  {
    Icon: Palette,
    name: "Effortless Customization",
    description: "Fine-tune every detail. Change colors, fonts, and layouts with an intuitive editor.",
    href: "#",
    cta: "See Design Options",
    className: "md:col-span-1",
    background: <PaletteAnimation />,
  },
  {
    Icon: BarChart3,
    name: "Integrated Analytics",
    description: "Track your success with a built-in dashboard. Monitor visits, growth, and engagement.",
    href: "#",
    cta: "View Dashboard",
    className: "md:col-span-1",
    background: <ChartAnimation />,
  },
  {
    Icon: Zap,
    name: "Blazing-Fast Hosting",
    description: "Every site is automatically optimized for speed and reliability on a global CDN.",
    href: "#",
    cta: "Learn about Hosting",
    className: "md:col-span-2",
    background: <motion.div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />,
  },
];

const Home: React.FC = () => {
  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const navigate = useNavigate();
  const { showToast } = useToast();
   
  const handleGenerateWebsite = () => {
    showToast('success', 'Redirecting to the AI Website Builder!');
    setTimeout(() => navigate('/builder'), 1500);
  };

   


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };


  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Globe, value: '100K+', label: 'Websites Created' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Award, value: '4.9/5', label: 'User Rating' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Hero Text */}
          <motion.div className="text-center lg:text-left" variants={containerVariants} initial="hidden" animate="visible">
            <motion.p variants={itemVariants} className="text-lg text-gray-400">From vision to growing business</motion.p>
            <motion.h1 variants={itemVariants} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">One AI platform to build, host and scale your website.</motion.h1>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">Generate stunning websites, host them on the most reliable platform, and scale with one intelligent AI solution.</motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <Button size="lg" onClick={handleGenerateWebsite} className="!bg-indigo-600 hover:!bg-indigo-500 !text-white !text-base !font-semibold !px-8 !py-4">Generate AI Website</Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Showcase Grid */}
          {/* <motion.div className="relative h-[500px]" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}>
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-4">
              <motion.div className="col-span-2 row-span-2 rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden" whileHover={{ scale: 1.05, zIndex: 10 }}><img src={showcaseItems.sideTop.image} alt="Side Top" className="w-full h-full object-cover" /></motion.div>
              <motion.div className="col-span-3 row-span-2 rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden relative" whileHover={{ scale: 1.05, zIndex: 10 }}><img src={showcaseItems.main.image} alt="Main" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4"><h3 className="text-white font-bold text-lg">{showcaseItems.main.title}</h3><button className="mt-2 text-xs font-bold bg-white/90 text-black px-4 py-2 rounded-md self-start">{showcaseItems.main.cta}</button></div></motion.div>
              <div className="col-span-2 row-span-1 flex flex-col gap-4"><motion.div className="flex-1 rounded-2xl bg-gray-900/50 border border-gray-800 p-4" whileHover={{ scale: 1.05, zIndex: 10 }}><p className="text-xs text-gray-400">yourdomain.org</p><div className="my-1.5 px-3 py-1.5 bg-black rounded-lg border border-gray-600 text-white text-xs flex items-center gap-2"><Globe className="w-4 h-4" /> yourdomain.com</div><p className="text-xs text-gray-400">studiovibes.org</p></motion.div><motion.div className="flex-1 rounded-2xl bg-green-500/80 flex items-center justify-center" whileHover={{ scale: 1.05, zIndex: 10 }}><ShieldCheck className="w-10 h-10 text-white" /></motion.div></div>
              <motion.div className="col-span-3 row-span-1 rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden" whileHover={{ scale: 1.05, zIndex: 10 }}><img src={showcaseItems.bottom.image} alt="Bottom" className="w-full h-full object-cover" /></motion.div>
            </div>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24" animate={{ y: ["-5%", "5%"] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0) 70%)' }}><div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-indigo-500/50"><Sparkles className="w-10 h-10 text-white" /></div></motion.div>
          </motion.div> */}

          <InteractiveHeroDemo/>
        </div>
      </section>



  <section className="py-20 sm:py-28 border-y border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="group relative text-center bg-black border border-gray-800 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Glowing border effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
          
          {/* Subtle icon in the background, more ethereal */}
          <stat.icon className="absolute -top-6 -right-6 w-28 h-28 text-gray-900 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          
          <div className="relative z-10">
            <HyperText
              className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tighter"
              delay={index * 200}
            >
              {stat.value}
            </HyperText>
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </div>
          
          {/* Soft black gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      
      {/* "How It Works" Section */}

      <section className="py-20 sm:py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">More than a website builder.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 text-lg text-gray-400">An intelligent platform designed to handle everything from concept to customer.</motion.p>
    </div>
    <div className="mt-16">
        <BentoGrid>
            {bentoFeatures.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    </div>
  </div>
</section>

         <section className="py-20 sm:py-28 bg-black">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <BoxReveal boxColor={"#a855f7"} duration={0.5}>
      <p className="text-3xl sm:text-4xl font-bold">
        Loved by businesses worldwide<span className="text-indigo-500">.</span>
      </p>
    </BoxReveal>

    <BoxReveal boxColor={"#38bdf8"} duration={0.5}>
      <h2 className="mt-4 text-lg text-gray-400">
        Our platform is trusted by entrepreneurs and designers to bring their visions to life, faster than ever before.
      </h2>
    </BoxReveal>

    <div className="mt-12 flex justify-center">
      <div className="relative max-w-2xl text-left bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
        <BoxReveal boxColor={"#34d399"} duration={0.5}>
          <blockquote className="text-lg text-gray-300 italic">
            "I actually decided to not go with Shopify because it was just too daunting and complicated. I am not experienced at all with website building, but everything I needed help with was addressed pretty clearly and I didn't get discouraged."
          </blockquote>
        </BoxReveal>
        
        <div className="mt-6 flex items-center space-x-4">
          <BoxReveal boxColor={"#6366f1"} duration={0.5}>
              <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Shannon Weitzel" />
          </BoxReveal>
          <div className="flex-1">
            <BoxReveal boxColor={"#6366f1"} duration={0.5}>
              <p className="font-semibold text-white">Shannon Weitzel</p>
            </BoxReveal>
            <BoxReveal boxColor={"#6366f1"} duration={0.5}>
              <p className="text-sm text-gray-400">WebCraft User</p>
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
            {/* NEW: API Section */}
        
      {/* CTA Section */}
      <UniqueCTA/>
     <Footer/>
    </div>
  );
};

export default Home;