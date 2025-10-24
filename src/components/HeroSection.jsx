import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[380px] sm:h-[440px] md:h-[520px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,255,198,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_70%_20%,rgba(255,215,106,0.12),transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center px-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_24px_rgba(0,255,198,0.25)]">
              Your Ideas, One Vault
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
              Capture notes, checklists, images, drawings, and voice – then organize with AI. Beautiful, fast, and collaborative.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <a href="#dashboard" className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-[#00FFC6] to-[#FFD76A] text-slate-900 shadow-[0_8px_40px_rgba(0,255,198,0.25)] hover:opacity-95 transition">
                Open Vault
              </a>
              <a href="#learn" className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-medium bg-white/60 dark:bg-slate-800/60 border border-white/20 dark:border-white/10 backdrop-blur">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
