
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Heart, Share2, Info } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  onAddToCart: (p: Product, size: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    const p = PRODUCTS.find(prod => prod.id === id);
    if (p) {
      setProduct(p);
      setMainImage(p.image);
    }
  }, [id]);

  if (!product) return <div className="p-20 text-center font-black">PRODUCT NOT FOUND</div>;

  return (
    <div className="min-h-screen pt-10">
      <div className="px-6 md:px-12 py-4 flex items-center gap-2 text-xs font-bold text-black/40 uppercase tracking-widest mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-black">{product.name}</span>
      </div>

      <div className="px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-white overflow-hidden">
            <img 
              src={mainImage} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setMainImage(img)}
                className={`aspect-square overflow-hidden border-2 transition-colors ${
                  mainImage === img ? 'border-brand-orange' : 'border-transparent'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-brand-orange font-black uppercase tracking-widest text-xs mb-2 block">{product.category}</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{product.name}</h1>
            </div>
            <div className="flex gap-3">
              <button className="p-2 border border-black/10 hover:border-brand-orange transition-colors"><Heart size={20} /></button>
              <button className="p-2 border border-black/10 hover:border-brand-orange transition-colors"><Share2 size={20} /></button>
            </div>
          </div>

          <p className="text-3xl font-black text-brand-black mb-8">₹{product.price}</p>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="font-black uppercase tracking-widest text-xs">Select Size</span>
              <button className="text-[10px] font-black text-black/40 underline uppercase tracking-widest">Sizing Chart</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-4 border-2 font-black text-sm transition-all ${
                    selectedSize === size 
                      ? 'border-brand-black bg-brand-black text-white' 
                      : 'border-black/10 hover:border-brand-orange text-black/60'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <button
              disabled={!selectedSize}
              onClick={() => onAddToCart(product, selectedSize)}
              className="w-full py-5 bg-brand-black text-white font-black uppercase tracking-widest hover:bg-brand-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>
            <button
              disabled={!selectedSize}
              className="w-full py-5 bg-brand-green text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy it Now
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                Description <Info size={16} className="text-brand-orange" />
              </h4>
              <p className="text-black/60 font-medium leading-relaxed">{product.description}</p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-3">Core Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-black/70">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
