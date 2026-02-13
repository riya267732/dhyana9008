
import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-black text-brand-offwhite px-4 md:px-12 py-4 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-3xl font-black tracking-tighter text-brand-offwhite">HOOP</Link>
        <div className="hidden md:flex gap-6 font-bold uppercase text-sm tracking-widest">
          <Link to="/shop" className="hover:text-brand-orange transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-brand-orange transition-colors">Collections</Link>
          <Link to="/account" className="hover:text-brand-orange transition-colors">Journal</Link>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="hidden md:block hover:text-brand-orange transition-colors">
          <Search size={22} />
        </button>
        <Link to="/account" className="hover:text-brand-orange transition-colors">
          <User size={22} />
        </Link>
        <Link to="/cart" className="relative group hover:text-brand-orange transition-colors">
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-black p-6 border-b border-white/10 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link to="/shop" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase">Shop</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase">Collections</Link>
          <Link to="/account" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase">Account</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
