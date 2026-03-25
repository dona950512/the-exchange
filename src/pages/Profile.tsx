import { Search, Bell, Star, Edit, Settings, Verified, Heart } from 'lucide-react';
import { Header } from '@/src/components/Header';
import { cn } from '@/src/lib/utils';

const FAVORITES = [
  {
    id: 'f1',
    name: '1970s Film SLR',
    price: 120,
    category: 'Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_7Pu87WFmF9Hyk9JWyJgxlidZ_YhqHHDsQcoMrX_aToJu4FYxYxxQjt5EzmswcLmuNfWiDtkypzyI5I0gUOREFOC0m9Sz7yBy_tug7LSjOUeoni5Tdio36qePdu8eqCcKz-Sa6TMI0GuxZLY8AQ27wCLs_sYX5ECTTsUPyLGHYYsH79tQPmjhgUpCtuKHVOJyP2FIIKwgkFN5zqR0jj2EfpMWJR8nclxk_ll8CNVf3MDzlNji8jqWpU_EBoj04rK_QKchPPj4ix4'
  },
  {
    id: 'f2',
    name: 'Lounge Chair',
    price: 850,
    category: 'Home',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDT1sGOsjX1C6pd9XFzAZ9iUwAeqMwRTRKZaGhwRaJ6lk-9Ez8gtkTBgF65S1biSE-k7YDjiSpZYpHoaT_4LTTrz-cbqFpowO6tpVOCuRS_MbzXpRgUUw82ibzgEv2AoXsNDyIt9_hECDFGe_JtvqyyClpk53RN5MQHwTJ88XoS1w9-F6gtkI7K9UgxhLWmfhHW3iDVmzAafS89dWIDeoS7tvwNmQ52RMZdJRZOE8uDZ6yTMcUA56-MGDIz2FkWM_xhD4_EbKnWa4'
  },
  {
    id: 'f3',
    name: 'Essential Watch',
    price: 210,
    category: 'Accessory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhHosOgatzUhBS-Xr8ufIkCKNmDZ16lihr18pFhYT4y8nm-25Z17tMvOEtX1HTTi3xkOe2quFR3R-EFQJYzIicCFl02gdH7xMnCqBHDMdWq8E_acPFnrIK5r08_q1hvJgDrlsD8g0nk-o5P-Vrzo5-Wrp42VL6Tv3KFvvtl0aSyoZL0QpwvFYA4UymO5Vf-gfd9wfPgNF7KfQFmAkk4RiixkQ8CLbwqe3EDYv2PpfCnal0i1P0vDYx1gak8F6WZniLHCsNDudNWK0'
  },
  {
    id: 'f4',
    name: 'Custom Denim',
    price: 95,
    category: 'Style',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLYru3ydFpFHfPshJJjiUMCxWjvbL_Xhz5gDQo7Jp3GG6pvtsnQ1OK8gSIxnmMAZ40S6JTbLGVcQJl7ifFlutWjFiw0BqTKACx20H9-mBWimSANPi5ZdUtxg4QvJDzIsSVCNbyxKF2YzHvH9QDRxT7K8Er3J8JPDPyI1yxlRfbDPG3Fm9nWwLFuLh-mOjKlJCR1dWsODanfpSDc1yp0_fHUQZUZbjWlEHhXOSWqwyE73KO_mG4MjbQPTbAsXUEPNmeYEcsblsQdcw'
  }
];

const REVIEWS = [
  {
    id: 'r1',
    author: 'Marcus Thorne',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBPpsK3qS_vXuUuWlokz7z-5XZ5DjFRZezXxaRJT_izCaDxd47giNasIJWOLcrHQRlLHZ6aD6kxANKuSsm1QT3Qw-qqlS7CDqIjQJAX08oY9jdKajoKi-zIcM-91n9_1k5KO-3oQIieIw8daCAN061s4hs7QiJ17mKXCFTC8_kpcGDQz-c-RV6xx3sfHLREwaGBRT40r1Su7rZekxCaHa7Gut06sygjcAilu0XHPxf060dnpnu4uCUdU0uF9hvQLDRSTNKwcJcotY',
    rating: 5,
    date: '2 days ago',
    content: '"The camera was packaged exceptionally well and arrived earlier than expected. Elena was very communicative throughout the process. Highly recommended!"',
    verified: true
  },
  {
    id: 'r2',
    author: 'Sasha V.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd7FAOi8hj3hn_HpIQ0GoKSAD2f6YS_OQyuGstGDqFlnEtbLOcEcEPJsfZcUuNwjf9LZpyAEK4IRbDX1ftrQwGXg6gag9Rt74SwM8BoXruAam0VW8_soMf9TGLVsR58yRb_7XESH380Q_rfxWgeiCHUHxL6truT4-yYc_YUZsNvUjYZvVCckVNC6LlX_B4Ggg1jlYgdxEuHEsnPtcxAZRnnv9evXc_2cC-ehSTpbOsacuDf3WNO0Ur0H8YBVIg-LKy58KrunsyMxE',
    rating: 4,
    date: '1 week ago',
    content: '"Great buyer! Instant payment and friendly messages. Looking forward to doing business again."',
    verified: true
  },
  {
    id: 'r3',
    author: 'Julian Berg',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzyC6QqcWX2vp0sOJJXO7sCqRCU1eYGZA5mB6EqqgV8tbCvNkFAbM1wnRy3x_9cSLz6ArUkv0a_MZnrV5KJ7LZlEW5U4ATMicO8tW5GL1mUsFcpwS_TUMEZp8hwNK_JjSWckFSInV-52E3rckhya6J6CfAw7hbVf2SoRl2PTXZVhrFhwzaUdQ3WgKJDEGxKb76w-N8_EMmxuL6XZ5HEgUjaKNUKV4Ats2lTnfxajz-_Wrjcj_aEPkhKjNHB6sFmCm1AAkbwd6VNLw',
    rating: 5,
    date: '2 weeks ago',
    content: '"Beautiful chair, exactly as described. The restoration work is flawless."',
    verified: true
  }
];

export function Profile() {
  return (
    <div className="bg-surface min-h-screen pb-32">
      <Header 
        showSearch={false} 
        showNotifications={false}
        leftAction={<Search className="w-5 h-5 text-orange-900" />}
        rightAction={<Bell className="w-5 h-5 text-orange-900" />}
      />

      <main className="max-w-screen-xl mx-auto px-6">
        {/* Profile Header Section */}
        <section className="mt-8 mb-12">
          <div className="bg-slate-100 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-900/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <img 
                alt="Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-white shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO8oSsRk15DBUJDOW9uzPOEoMuTkF-91LYnAIzPdOmPpQFIpzKoM34CDxOWyBauBEMp16ajrJ9-ZK13hd2YKSP8Wz38MQ8cBKRxpqXCtNK7QX5sDFRW09jUxRjgl5bpQBvZ8n51y9-eiUKCm3R3g5Lv9gFEQ5AIGaxkdfK3H1kZ2eIXkdaIcvxmMAn-7M1UcuzoJ5G1N2CFX7MnmkR23bMNHy7SXMns_7U_Zg2PUlnYHddEmlLnWdiUkBCH7JFGUQcjOFDUUQeoNc"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1">
                <Verified className="w-3 h-3 fill-current" />
                VERIFIED
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h2 className="font-headline font-extrabold text-3xl tracking-tight text-slate-900">Elena Richardson</h2>
                <div className="flex items-center justify-center md:justify-start gap-1 text-orange-900">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-lg">4.8</span>
                  <span className="text-slate-500 text-sm font-medium">(124 reviews)</span>
                </div>
              </div>
              <p className="text-slate-500 max-w-xl mb-6 leading-relaxed">Curating rare vintage finds and mid-century modern pieces from the Pacific Northwest. Sustainability advocate and fast shipper.</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button className="px-6 py-2.5 bg-gradient-to-r from-orange-900 to-orange-700 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Edit className="w-5 h-5" />
                  Edit Profile
                </button>
                <button className="px-6 py-2.5 bg-white text-orange-900 rounded-lg font-semibold shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 md:gap-12 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 md:pl-12">
              <div className="text-center">
                <div className="font-headline font-bold text-2xl text-slate-900">84</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Sold</div>
              </div>
              <div className="text-center">
                <div className="font-headline font-bold text-2xl text-slate-900">12</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Active</div>
              </div>
              <div className="text-center">
                <div className="font-headline font-bold text-2xl text-slate-900">98%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Favorites & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* My Favorites */}
          <section className="lg:col-span-7">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="font-headline font-bold text-2xl tracking-tight text-slate-900">My Favorites</h3>
                <p className="text-sm text-slate-500">Saved items you're watching</p>
              </div>
              <button className="text-orange-900 font-semibold text-sm hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {FAVORITES.map((item) => (
                <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 border border-slate-100">
                  <div className="relative aspect-square">
                    <img 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                      src={item.image}
                      referrerPolicy="no-referrer"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-orange-900 transition-colors">
                      <Heart className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 truncate">{item.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-lg font-extrabold text-orange-900">${item.price}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full font-bold text-slate-500 uppercase">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ratings & Reviews */}
          <section className="lg:col-span-5">
            <div className="mb-6">
              <h3 className="font-headline font-bold text-2xl tracking-tight text-slate-900">Ratings & Reviews</h3>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-orange-900">
                  {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <Star className="w-4 h-4 fill-current opacity-50" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Top-Rated Seller</span>
              </div>
            </div>
            <div className="space-y-4">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <img 
                        alt={review.author} 
                        className="w-10 h-10 rounded-full object-cover" 
                        src={review.avatar}
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h5 className="font-bold text-sm text-slate-900">{review.author}</h5>
                        <p className="text-[10px] text-slate-500 font-medium">Verified {review.id === 'r2' ? 'Seller' : 'Buyer'} • {review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-orange-900">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{review.content}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-4 bg-slate-100 text-slate-900 font-bold text-sm rounded-xl hover:bg-slate-200 transition-colors">
              Read All 124 Reviews
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
