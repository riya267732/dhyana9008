
import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-6xl font-black mb-6 tracking-tighter">HOOP.</h2>
          <p className="text-white/60 max-w-sm mb-8 font-medium">
            Engineered for elite performance. Born from the culture of the blacktop. Designed for those who never stop playing.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-orange transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-brand-orange transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-brand-orange transition-colors"><Youtube size={24} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-orange uppercase tracking-widest text-sm mb-6">Collections</h4>
          <ul className="space-y-4 text-white/70 font-medium">
            <li><Link to="/shop" className="hover:text-white">Summer Series</Link></li>
            <li><Link to="/shop" className="hover:text-white">Pro League 2024</Link></li>
            <li><Link to="/shop" className="hover:text-white">Baseline Basics</Link></li>
            <li><Link to="/shop" className="hover:text-white">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-orange uppercase tracking-widest text-sm mb-6">Customer Care</h4>
          <ul className="space-y-4 text-white/70 font-medium">
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white">Sizing Guide</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4 text-white/40 text-xs font-bold uppercase tracking-widest">
        <p>&copy; 2024 HOOP SPORTSWEAR CO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
