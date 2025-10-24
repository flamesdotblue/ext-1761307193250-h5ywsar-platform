import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import BottomAddSheet from './components/BottomAddSheet';

export default function App() {
  const [addOpen, setAddOpen] = useState(false);

  useEffect(() => {
    // Respect system theme on first load
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.matches) document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(80%_80%_at_50%_0%,#0b1325,transparent)] dark:bg-[radial-gradient(80%_80%_at_50%_0%,#070b16,transparent)] text-slate-900 dark:text-slate-100">
      <Header onAdd={() => setAddOpen(true)} />
      <main className="relative">
        <HeroSection />
        <Dashboard onAdd={() => setAddOpen(true)} />
      </main>
      <BottomAddSheet open={addOpen} onClose={() => setAddOpen(false)} />
    </div>
  );
}
