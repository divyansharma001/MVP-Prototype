import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Facebook, Twitter, Linkedin, Youtube, Accessibility } from 'lucide-react';

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base hover:text-primary transition-colors">AI Builder</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">Hosting</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">API Docs</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Compare</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base hover:text-primary transition-colors">vs. Wix</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">vs. Webflow</a></li>
              <li><a href="#" className="text-base hover:text-primary transition-colors">vs. Squarespace</a></li>
            </ul>
          </div>
          {/* Column 5 */}
          <div className="col-span-2 md:col-span-1">
             <div className="relative inline-flex">
                <select className="bg-secondary border border-border rounded-md appearance-none pl-10 pr-4 py-2 text-sm">
                    <option>English</option>
                    <option>Español</option>
                </select>
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
             </div>
             <div className="flex items-center space-x-2 mt-4 text-sm">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <span>Proudly Built with WebCraft</span>
             </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mt-16">
            <motion.div
                className="whitespace-nowrap"
                animate={{ x: ['0%', '-25%'] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
            >
                <h2 className="text-[140px] font-extrabold tracking-tighter inline-block">
                    Build with WebCraft
                </h2>
                <h2 className="text-[140px] font-extrabold tracking-tighter inline-block ml-8">
                    Build with WebCraft
                </h2>
            </motion.div>
        </div>
      </div>
      
      <div className="bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} WebCraft</p>
                <a href="#" className="hover:text-primary">Privacy</a>
                <a href="#" className="hover:text-primary">Terms</a>
            </div>
            <div className="flex items-center space-x-4">
                {socialIcons.map((social, index) => (
                    <a key={index} href={social.href} className="text-muted-foreground hover:text-primary">
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
                <button className="p-2 rounded-full bg-primary text-primary-foreground">
                    <Accessibility className="w-5 h-5" />
                </button>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;