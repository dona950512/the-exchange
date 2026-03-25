import { X, Camera, Image as ImageIcon, ChevronDown, Truck } from 'lucide-react';
import { Header } from '@/src/components/Header';
import { cn } from '@/src/lib/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function List() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !category) return alert('Please fill in all required fields');
    
    setLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          price: Number(price),
          category,
          description,
          seller_id: null, // Will be set gracefully by DB or ignored by RLS in prototype context
          image_url: imageUrl || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
        })
      });
      if (!res.ok) throw new Error('Failed to create listing');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error creating listing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface min-h-screen pb-32">
      <Header 
        title="List an Item" 
        showSearch={false} 
        showNotifications={false}
        leftAction={
          <button onClick={() => navigate('/')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-orange-900" />
          </button>
        }
        rightAction={
          <div className="hidden md:flex gap-6 items-center">
            <span className="text-xs text-slate-500">Draft saved 2m ago</span>
          </div>
        }
      />
      
      <main className="max-w-screen-md mx-auto px-6 pt-4">
        {/* Photo Upload Section */}
        <section className="mb-10">
          <h2 className="font-headline font-bold text-lg mb-4 text-slate-900">Product Image URL</h2>
          <input 
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full bg-white border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-orange-900/10 text-base shadow-sm" 
            placeholder="Paste an image URL here (e.g., https://...)" 
            type="url"
          />
          {imageUrl && (
            <div className="mt-4 aspect-square bg-slate-50 rounded-lg overflow-hidden relative group w-48">
              <img 
                className="w-full h-full object-cover" 
                src={imageUrl}
                alt="Preview"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop')}
              />
            </div>
          )}
        </section>

        {/* Listing Details Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Item Name */}
          <div className="space-y-2">
            <label className="font-headline font-bold text-sm uppercase tracking-wider text-slate-500">Item Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-orange-900/10 text-lg shadow-sm" 
              placeholder="What are you selling?" 
              type="text"
              required
            />
          </div>

          {/* Price & Category Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-headline font-bold text-sm uppercase tracking-wider text-slate-500">Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">$</span>
                <input 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-white border-none rounded-lg pl-8 pr-4 py-4 focus:ring-2 focus:ring-orange-900/10 text-lg shadow-sm" 
                  placeholder="0.00" 
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-headline font-bold text-sm uppercase tracking-wider text-slate-500">Category</label>
              <div className="relative">
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-orange-900/10 text-lg shadow-sm appearance-none cursor-pointer"
                  required
                >
                  <option disabled value="">Select Category</option>
                  <option value="Electronics">3C & Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Books">Books</option>
                  <option value="Sports">Sports & Outdoors</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="font-headline font-bold text-sm uppercase tracking-wider text-slate-500">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-orange-900/10 text-base shadow-sm resize-none" 
              placeholder="Describe your item's condition, features, and why you're selling it..." 
              rows={5}
            />
          </div>

          {/* Primary Action */}
          <div className="mt-12">
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-900 to-orange-700 text-white font-headline font-bold py-5 rounded-lg text-xl shadow-lg hover:opacity-90 transition-all transform active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? 'Posting...' : 'Post Item'}
            </button>
            <p className="text-center mt-4 text-xs text-slate-500">By posting, you agree to our Community Guidelines.</p>
          </div>
        </form>
      </main>
    </div>
  );
}
