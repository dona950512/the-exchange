import { Home, MessageCircle, PlusCircle, Heart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function BottomNav() {
  const navItems = [
    { icon: Home, label: 'Browse', path: '/' },
    { icon: MessageCircle, label: 'Messages', path: '/chat' },
    { icon: PlusCircle, label: 'Sell', path: '/list' },
    { icon: Heart, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 rounded-t-2xl shadow-[0_-4px_24px_-4px_rgba(25,28,30,0.06)]">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center transition-all px-4 py-2 rounded-xl",
              isActive 
                ? "text-orange-900 dark:text-orange-500 scale-105" 
                : "text-slate-500 dark:text-slate-400 opacity-70 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            )
          }
        >
          <item.icon className={cn("w-6 h-6", item.path === '/list' && "w-7 h-7")} />
          <span className="font-['Inter'] text-[10px] font-medium tracking-tight mt-1">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
