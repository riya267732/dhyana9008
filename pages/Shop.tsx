
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Jersey', 'Hoodie', 'Shorts', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'All' 
      ? [...PRODUCTS] 
      : PRODUCTS.filter(p => p.category === activeCategory);
    
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-brand-offwhite">
      {/* Header */}
      <header className="bg-brand-black text-white pt-24 pb-12 px-6 md:px-12">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">The Armory.</h1>
        <p className="text-white/60 font-medium max-w-lg tracking-wide uppercase text-sm">High performance gear engineered for the modern athlete.</p>
      </header>

      {/* Toolbar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-black/10 px-6 md:px-12 py-4 flex flex-col md:row items-center justify-between gap-4">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === c ? 'bg-brand-black text-white' : 'bg-black/5 hover:bg-black/10 text-black/60'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto justify-between border-t md:border-t-0 pt-4 md:pt-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40">
            <SlidersHorizontal size={16} />
            <span>Sort By:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-brand-black outline-none font-black cursor-pointer uppercase"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-black/30">
            {filteredProducts.length} Results
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="group">
            <div className="aspect-[4/5] bg-white relative overflow-hidden">
              <img 
                src={p.image} 
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {p.isNew && <span className="bg-brand-green text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">New</span>}
                <span className="bg-brand-black text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">{p.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur-sm">
                <button className="w-full py-3 bg-brand-black text-white font-black uppercase tracking-widest text-xs hover:bg-brand-orange transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-black uppercase tracking-tight text-brand-black group-hover:text-brand-orange transition-colors">
                {p.name}
              </h3>
              <p className="text-brand-black/60 font-bold mt-1">₹{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
