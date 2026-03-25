import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  className?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
}

export function Header({ 
  title = "The Exchange", 
  showSearch = true, 
  showNotifications = true,
  className,
  leftAction,
  rightAction
}: HeaderProps) {
  return (
    <header className={cn("sticky top-0 w-full z-50 bg-slate-50 dark:bg-slate-950", className)}>
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4">
          {leftAction || (
            showSearch && (
              <button className="text-slate-500 dark:text-slate-400 hover:opacity-80 transition-opacity">
                <Search className="w-5 h-5" />
              </button>
            )
          )}
          {title && (
            <h1 className="text-orange-900 dark:text-orange-500 font-['Manrope'] font-extrabold uppercase tracking-widest text-2xl">
              {title}
            </h1>
          )}
        </div>
        <div className="flex items-center gap-4">
          {rightAction || (
            <>
              {showNotifications && (
                <button className="text-slate-500 dark:text-slate-400 hover:opacity-80 transition-opacity">
                  <Bell className="w-5 h-5" />
                </button>
              )}
              <button className="text-slate-500 dark:text-slate-400 hover:opacity-80 transition-opacity">
                <Menu className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
