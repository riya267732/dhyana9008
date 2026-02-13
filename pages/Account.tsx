
import React, { useState } from 'react';
import { User, Package, Heart, LogOut, Settings } from 'lucide-react';

const Account: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-12 shadow-2xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-center">Join The League</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">Email Address</label>
              <input type="email" className="w-full border-b-2 border-black/10 focus:border-brand-orange px-1 py-3 outline-none font-bold transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">Password</label>
              <input type="password" className="w-full border-b-2 border-black/10 focus:border-brand-orange px-1 py-3 outline-none font-bold transition-colors" />
            </div>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-5 bg-brand-black text-white font-black uppercase tracking-widest hover:bg-brand-orange transition-colors mt-4"
            >
              Sign In
            </button>
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-black/40 pt-4">
              <button className="hover:text-brand-orange">Create Account</button>
              <button className="hover:text-brand-orange">Forgot Password?</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-offwhite flex flex-col md:row">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-brand-black text-white p-12">
        <div className="mb-12">
          <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center font-black text-3xl mb-4">
            KS
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">Karan Singh</h2>
          <p className="text-brand-green font-bold text-xs uppercase tracking-widest">Elite Member</p>
        </div>

        <nav className="space-y-8 text-sm font-bold uppercase tracking-widest text-white/40">
          <button className="flex items-center gap-4 text-white hover:text-brand-orange transition-colors">
            <Package size={20} /> Order History
          </button>
          <button className="flex items-center gap-4 hover:text-white transition-colors">
            <Heart size={20} /> Wishlist
          </button>
          <button className="flex items-center gap-4 hover:text-white transition-colors">
            <Settings size={20} /> Settings
          </button>
          <div className="pt-12">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-4 text-brand-orange hover:text-brand-green transition-colors"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-20">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Order History</h1>
        
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-8 border border-black/5 flex flex-col md:row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Order #HP-230{i}</p>
                <h3 className="text-xl font-black uppercase tracking-tight">Placed June {15 + i}, 2024</h3>
                <p className="text-xs font-bold text-black/40 mt-1 uppercase tracking-widest">Delivered via HOOP Express</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-black text-lg">₹7,499</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-green">Completed</p>
                </div>
                <button className="px-6 py-3 bg-black/5 hover:bg-black/10 text-black font-black uppercase tracking-widest text-xs transition-all">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
