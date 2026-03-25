import { Search, SlidersHorizontal, Star, ArrowRight, Heart, PlusCircle } from 'lucide-react';
import { Header } from '@/src/components/Header';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';
import { Product } from '@/src/types';

const CATEGORIES = [
  'All Categories',
  '3C & Electronics',
  'Fashion',
  'Books',
  'Sports & Outdoors',
  'Home Decor'
];

// Items will be fetched from API

export function Browse() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setItems(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-surface min-h-screen pb-32">
      <Header />
      <main className="max-w-screen-xl mx-auto px-6">
        {/* Search & Filter Bar */}
        <section className="mt-4 mb-8">
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                className="w-full bg-white py-4 pl-12 pr-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-orange-900/20 transition-all text-sm placeholder:text-slate-400" 
                placeholder="Search for unique finds..." 
                type="text"
              />
            </div>
            <button className="bg-slate-100 p-4 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </section>

        {/* Category Chips */}
        <section className="mb-12">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {CATEGORIES.map((cat, i) => (
              <button 
                key={cat}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-all",
                  i === 0 
                    ? "bg-orange-900 text-white scale-105" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-1">Curated for you</p>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900">Recommended</h2>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
              <span className="text-xs font-medium text-slate-500 px-2">Sort:</span>
              <select className="bg-transparent border-none text-xs font-bold text-slate-900 focus:ring-0 cursor-pointer pr-8 py-1">
                <option>Newest First</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-7 group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGEpDZrijWQdil08SqfTstjRHoZK8BEQTUwLaWUiznmaMquz5_60qZQHXkSLPKqzCog0UoiT-_BK7L_y1Bm9sFS5sXpCsrbFzhhi6FGwrQ1u77UWkQRuEk7-6_IKlWzDN7kkjqqlah6ucxPOOpexSqsCJp-VFWHEh0j9zEOmb5CmsJRHsmE9iqd5FICTga3X7DDDeqEPvRl61AmrfbPfBFZ3pGS9rnPn7vviN-c_6ZH2FlLbo3vUxyITjTezj3WJ5Sw6zODB5Wjf4"
                  alt="Headphones"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-orange-900 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Top Pick</div>
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-xl font-bold text-slate-900 group-hover:text-orange-900 transition-colors">Studio-Grade Audio Over-Ear</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-slate-500 text-xs">(128 reviews)</span>
                  </div>
                </div>
                <span className="text-orange-900 font-headline text-2xl font-extrabold">$249.00</span>
              </div>
            </div>

            {/* Side Grid */}
            <div className="md:col-span-5 grid grid-cols-1 gap-6">
              <div className="flex gap-4 group cursor-pointer bg-slate-50 p-3 rounded-xl transition-colors hover:bg-slate-100">
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMFYtIUpoAj-AvP5DhL7nZqrXKxtcnAu3f5yUlHW4whc-oyCVHz1_K_1doXwuAS4J4hm_ZIRBrQKde2IgRJbcWgamPQHeN4YhuuqAsl3lEA6dnbu0ELbgrcqDrKGk_iQbj9-a-9NVzX4u1vW5V7OmNvPGgT7iT-8JhPFsFpf4AiWS61aXzVNRAlommIMmJznOhkIzmsLKCXH4vNVNq7qvZYlwhhwgo5oHcoB1QZVmoZSUugLuc9HV3ispdmZiFxDjipPFS2dQ3xjk"
                    alt="Watch"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-blue-600 font-bold mb-1">Fashion</span>
                  <h4 className="font-headline font-bold text-slate-900 leading-tight mb-2">Heritage Minimalist Watch</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-[10px] font-bold text-slate-500">4.9 • Boutique NY</span>
                  </div>
                  <span className="text-orange-900 font-bold text-lg">$185.00</span>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer bg-slate-50 p-3 rounded-xl transition-colors hover:bg-slate-100">
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLEhG8u4XHEEhZNvy4M7TiR86IwYxLs15kjXd6vs3XxwWqrpTBVyp21NRvLy5U3VZzEs3ROarqtTQcMWppJIEYJ2mA_APPeYixwCq8MsRsWPHnUKe8Qjuz7NCtWnsCS2TyYSB0IsZxqZQbfj2EsauMf5FLckLhppUrPmL_SrNNFxF7jlfMgz-abgJ64eYWLoXMFu3xVMw1siXv2XIgLoc105Zq4WZ_FsJD7O00Mi32wH11m5SPq4E5tK89FTTJh77vU8S2sDLE7-k"
                    alt="Books"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-blue-600 font-bold mb-1">Books</span>
                  <h4 className="font-headline font-bold text-slate-900 leading-tight mb-2">The Architecture of Light</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-[10px] font-bold text-slate-500">5.0 • Rare Finds</span>
                  </div>
                  <span className="text-orange-900 font-bold text-lg">$45.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-slate-900">Explore Marketplace</h2>
            <button className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {loading ? (
              <p className="text-slate-500">Loading items...</p>
            ) : items.length === 0 ? (
              <p className="text-slate-500">No items found.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 mb-4">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      src={item.image || item.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 hover:text-red-500 transition-colors">
                      <Heart className={cn("w-5 h-5", item.liked && "fill-current text-red-500")} />
                    </button>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">{item.category}</span>
                  <h3 className="font-headline font-bold text-slate-900 line-clamp-1 mb-1">{item.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-[11px] text-slate-500 font-medium">{item.rating || 0} ({(item.reviews || item.reviews_count) >= 1000 ? `${((item.reviews || item.reviews_count)/1000).toFixed(1)}k` : (item.reviews || item.reviews_count || 0)})</span>
                  </div>
                  <p className="text-orange-900 font-headline font-extrabold text-xl">${Number(item.price).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 bg-gradient-to-br from-orange-900 to-orange-700 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-40 flex items-center gap-2">
        <PlusCircle className="w-6 h-6" />
        <span className="font-bold pr-2">Sell Now</span>
      </button>
    </div>
  );
}
