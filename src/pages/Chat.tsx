import { ArrowLeft, Bell, MoreVertical, PlusCircle, Image as ImageIcon, Send } from 'lucide-react';
import { Header } from '@/src/components/Header';
import { cn } from '@/src/lib/utils';

export function Chat() {
  return (
    <div className="bg-surface min-h-screen flex flex-col">
      <Header 
        title="Elena K." 
        showSearch={false} 
        showNotifications={false}
        leftAction={
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                <img 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2MSQbC8Ze9901DmhmNip8ruqoRqjMcZM_1YZr3QFU9CJ2r5Ljg6lf3t6CRxEkq2juTADco2OFKSseZFs37lqQaezVjy9mtkfkU31PNybd-xamkrOULufizHkAGbi3VTCm1pQTZM_Bltpfm9sjcSUNSMkIqrtHZ-KwKrpioPq7p0FrrgOsf7dofIf2bWx-dDkPLqfoROK30RX9fJ-lokpLnVryN51q9EB8pvKkE_SsAomlRwVbUBiQL4c3zVe8LeHfm2aW4ADvT0k"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-50 rounded-full"></div>
              </div>
              <div>
                <h1 className="font-headline font-bold text-lg leading-tight text-orange-900">Elena K.</h1>
                <p className="text-xs text-slate-500 font-medium">Online</p>
              </div>
            </div>
          </div>
        }
        rightAction={
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:opacity-80 transition-opacity">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-slate-500 hover:opacity-80 transition-opacity">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        }
      />

      <main className="flex-1 flex flex-col w-full max-w-2xl mx-auto relative px-4 md:px-0">
        {/* Product Summary Card */}
        <div className="mt-4 mb-6 z-10">
          <div className="bg-white p-3 rounded-xl flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
              <img 
                alt="Product" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMtt_4elOzgprWf_o2w2PANsKoRDED9H_JFJgYQ0D3fdwa6ZstunBrNixBfb6ik87TbhrFYlYVXTEFTW50pNHXTzWVf6GDGXqDLl9AVzOgZXwuE8yHB44MzbdX_vJT3i2sgRUJTcLcas_VUxP-qR3Px6lqXk6YvqS2DNzi-2U4hE2s-McRd-sZ5A7FemnHqzifL0na5W-Ie6ohr8j_4KmOj7t_giGT9X6QtNMbrwje7YsqwV4QdPanA_ru2NVE-NafpHYCXYsjf9c"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h2 className="font-headline font-bold text-sm truncate pr-2">Vintage Minimalist Watch</h2>
                <span className="font-headline font-extrabold text-orange-900 text-sm">$145</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-bold py-0.5 px-2 bg-blue-50 text-blue-600 rounded-full">Available</span>
                <span className="text-[10px] text-slate-500 font-medium">Ships from Berlin</span>
              </div>
            </div>
            <button className="bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-2 rounded-lg text-xs font-bold text-slate-900">
              View
            </button>
          </div>
        </div>

        {/* Chat Conversation */}
        <div className="flex-1 space-y-8 pb-32">
          {/* Received Message */}
          <div className="flex flex-col gap-2 max-w-[85%]">
            <div className="bg-slate-100 text-slate-900 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-sm">
              Hi! Is the watch still available? I'm really interested in the leather strap condition.
            </div>
            <span className="text-[10px] text-slate-500 self-start ml-1 uppercase tracking-wider font-semibold">10:42 AM</span>
          </div>

          {/* Sent Message */}
          <div className="flex flex-col gap-2 max-w-[85%] self-end">
            <div className="bg-orange-900 text-white p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed shadow-sm">
              Hello Elena! Yes, it's still available. The strap is genuine Italian leather and has very minimal wear. I've only worn it about five times.
            </div>
            <span className="text-[10px] text-slate-500 self-end mr-1 uppercase tracking-wider font-semibold">10:45 AM • Read</span>
          </div>

          {/* Sent Image Message */}
          <div className="flex flex-col gap-2 max-w-[60%] self-end">
            <div className="p-1 bg-white rounded-2xl rounded-tr-none shadow-sm overflow-hidden border border-slate-100">
              <img 
                alt="Watch detail" 
                className="rounded-xl w-full aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1pDIyuIeMvz_xSc9IwPQ-fMZ8-uamVeBpgGS69PeAR4Y8T33X1a_Sn872Oj9eSb9IKdTMUo2y_kxedXyP6NF538EmN4SqrQrJ4wxQR4rC6qBv7VfE_r4_dwhc6HUSlOiTpMoMWA6XkHi_1Yg9eAEIteoNnKSVtzU-Gxr-1uBzIIy_lWqDVVQE9YVucHss_odzzG3ohAj9JiAsSC05Ea_UsxWJBO62brEQKrwSUNNBk1g41mw85DWk-XzK-uwnA1txU2TVF-D81cA"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] text-slate-500 self-end mr-1 uppercase tracking-wider font-semibold">10:46 AM</span>
          </div>

          {/* Received Message */}
          <div className="flex flex-col gap-2 max-w-[85%]">
            <div className="bg-slate-100 text-slate-900 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-sm">
              The leather looks great. Would you consider $130 for it? I can pay right away.
            </div>
            <span className="text-[10px] text-slate-500 self-start ml-1 uppercase tracking-wider font-semibold">10:48 AM</span>
          </div>
        </div>
      </main>

      {/* Chat Input Area */}
      <div className="fixed bottom-[88px] left-0 w-full z-40 px-4 max-w-2xl mx-auto left-1/2 -translate-x-1/2">
        <div className="bg-white/80 backdrop-blur-xl p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-orange-900 transition-colors">
            <PlusCircle className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-orange-900 transition-colors">
            <ImageIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 bg-slate-50 rounded-xl px-4 py-2.5">
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-slate-400" 
              placeholder="Type a message..." 
              type="text"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2.5 rounded-xl font-headline font-bold text-xs whitespace-nowrap hover:opacity-90 transition-opacity">
            議價
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-orange-900 transition-transform active:scale-95">
            <Send className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}
