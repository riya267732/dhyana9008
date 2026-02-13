
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string, size: string) => void;
  onUpdateQty: (id: string, size: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQty }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 3000 ? 0 : 150;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <h2 className="text-6xl font-black uppercase tracking-tighter mb-6">Your bag is empty</h2>
        <p className="text-black/40 font-bold uppercase tracking-widest mb-10 text-center">Get back on the court and find your fit.</p>
        <Link to="/shop" className="px-12 py-5 bg-brand-black text-white font-black uppercase tracking-widest hover:bg-brand-orange transition-colors">
          Shop Armory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-offwhite py-20 px-6 md:px-12">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Your Gear.</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Items */}
        <div className="lg:col-span-2 space-y-8">
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex flex-col sm:row gap-6 p-6 bg-white border border-black/5">
              <div className="w-full sm:w-32 aspect-[4/5] bg-gray-100 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight">{item.name}</h3>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-widest mt-1">
                      Size: {item.selectedSize} | {item.category}
                    </p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id, item.selectedSize)}
                    className="text-black/30 hover:text-brand-orange transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-4 bg-black/5 px-4 py-2">
                    <button onClick={() => onUpdateQty(item.id, item.selectedSize, -1)} className="hover:text-brand-orange"><Minus size={16}/></button>
                    <span className="font-black w-4 text-center">{item.quantity}</span>
                    <button onClick={() => onUpdateQty(item.id, item.selectedSize, 1)} className="hover:text-brand-orange"><Plus size={16}/></button>
                  </div>
                  <p className="font-black text-lg">₹{item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white p-8 h-fit border border-black/5">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Summary</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm font-bold text-black/60 uppercase tracking-widest">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-black/60 uppercase tracking-widest">
              <span>Estimated Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-[10px] text-brand-orange font-black uppercase tracking-widest">
                Add ₹{3000 - subtotal} more for free shipping
              </p>
            )}
            <div className="pt-4 border-t border-black/10 flex justify-between font-black text-xl uppercase tracking-tight">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="PROMO CODE" 
                className="w-full bg-black/5 border-none px-4 py-4 text-sm font-black uppercase tracking-widest outline-none focus:ring-1 focus:ring-brand-orange"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-orange font-black text-xs uppercase tracking-widest hover:text-black">Apply</button>
            </div>
            <button className="w-full py-5 bg-brand-black text-white font-black uppercase tracking-widest hover:bg-brand-orange transition-colors">
              Checkout
            </button>
            
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-black/40 uppercase tracking-widest">
                <Truck size={16} />
                <span>Fast 3-5 Day Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-black/40 uppercase tracking-widest">
                <ShieldCheck size={16} />
                <span>Secure Payment Guarantee</span>
              </div>
              <div className="flex gap-4 opacity-30 pt-4">
                <CreditCard size={24} />
                <span className="font-black italic text-xl">VISA</span>
                <span className="font-black italic text-xl">PAYPAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
