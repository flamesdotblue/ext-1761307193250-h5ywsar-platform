import { useEffect, useState } from 'react';
import { Sparkles, Settings, User, Moon, Sun } from 'lucide-react';

export default function Header({ onAdd }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      setDark(false);
    } else {
      root.classList.add('dark');
      setDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border-b border-white/10 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#00FFC6] to-[#FFD76A] shadow-[0_0_32px_rgba(0,255,198,0.35)] ring-1 ring-white/30 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-slate-900" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold">IdeaVault</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Capture. Organize. Collaborate.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onAdd} className="hidden sm:inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-[0_0_24px_rgba(0,0,0,0.25)] hover:scale-[1.02] active:scale-100 transition">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00FFC6] to-[#FFD76A]" />
            New Idea
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="h-10 w-10 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 dark:border-white/10 flex items-center justify-center hover:shadow-inner transition">
            {dark ? <Sun className="h-5 w-5 text-amber-300" /> : <Moon className="h-5 w-5 text-slate-700" />}
          </button>
          <button aria-label="Settings" className="h-10 w-10 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 dark:border-white/10 flex items-center justify-center">
            <Settings className="h-5 w-5" />
          </button>
          <button aria-label="Profile" className="h-10 w-10 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 dark:border-white/10 flex items-center justify-center">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
