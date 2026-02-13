
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import Countdown from '../components/Countdown';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-brand-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Basketball Court"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-brand-offwhite text-6xl md:text-[12rem] font-black leading-none tracking-tighter mb-8 drop-shadow-2xl">
            BUILT FOR <br /> THE GAME.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              to="/shop" 
              className="px-12 py-5 bg-brand-orange text-white font-black uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all duration-300 w-full md:w-auto"
            >
              Shop Now
            </Link>
            <Link 
              to="/shop" 
              className="px-12 py-5 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto"
            >
              Explore Collection
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-12 hidden md:block">
          <p className="text-brand-green font-bold text-xs tracking-widest animate-bounce">SCROLL TO DISCOVER</p>
        </div>
      </section>

      {/* Stats/Badges */}
      <section className="bg-brand-black py-12 px-6 md:px-12 border-y border-white/10 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          <div className="flex items-center gap-3 text-white/60">
            <Zap className="text-brand-green" />
            <span className="font-bold uppercase tracking-widest text-sm">Ultra Lightweight</span>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <Shield className="text-brand-orange" />
            <span className="font-bold uppercase tracking-widest text-sm">Pro Durability</span>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <TrendingUp className="text-brand-green" />
            <span className="font-bold uppercase tracking-widest text-sm">Max Performance</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Selected Drops</span>
            <h2 className="text-5xl font-black text-brand-black tracking-tighter mt-2 uppercase">Core Performance</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:text-brand-orange transition-colors">
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group relative">
              <div className="aspect-[4/5] overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-brand-green text-black font-black px-3 py-1 text-[10px] uppercase tracking-widest">
                    New Drop
                  </span>
                )}
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-black uppercase tracking-widest text-xs">Quick View</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl text-brand-black uppercase">{product.name}</h3>
                  <p className="text-black/50 text-sm font-medium">{product.category}</p>
                </div>
                <span className="font-black text-brand-orange">₹{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Limited Drop */}
      <section className="bg-brand-offwhite py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 text-9xl font-black text-black opacity-[0.03] rotate-12 select-none">HOOP.</div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-brand-black text-brand-green font-black px-4 py-1 text-xs uppercase tracking-[0.2em] mb-8">Limited Edition</span>
          <h2 className="text-4xl md:text-7xl font-black text-brand-black uppercase tracking-tighter mb-8">
            The Obsidian Elite <br /> Drop Ends In
          </h2>
          <Countdown />
          <div className="mt-12">
            <Link 
              to="/shop" 
              className="inline-block px-12 py-5 bg-brand-black text-white font-black uppercase tracking-widest hover:bg-brand-orange transition-colors"
            >
              Secure Your Pair
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-black text-brand-offwhite px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
              Trusted by the <br /><span className="text-brand-orange">Next Generation</span>
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed">
              From high-school prodigies to pro-league legends, HOOP gear is tested on the toughest courts to ensure it meets the demands of elite athletes.
            </p>
          </div>
          <div className="space-y-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <p className="text-xl font-bold italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center font-black text-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">{t.name}</h4>
                    <p className="text-brand-orange text-xs font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
