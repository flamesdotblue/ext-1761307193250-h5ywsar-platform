import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckSquare, Image, Pencil, Mic, Camera, X } from 'lucide-react';

const actions = [
  { key: 'text', label: 'Text', icon: FileText, desc: 'Write a quick note' },
  { key: 'checklist', label: 'Checklist', icon: CheckSquare, desc: 'Track tasks' },
  { key: 'image', label: 'Image', icon: Image, desc: 'Attach a photo' },
  { key: 'drawing', label: 'Drawing', icon: Pencil, desc: 'Sketch ideas' },
  { key: 'voice', label: 'Voice', icon: Mic, desc: 'Record audio' },
  { key: 'camera', label: 'Camera', icon: Camera, desc: 'Capture now' },
];

export default function BottomAddSheet({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-40">
          <motion.div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-white/30 dark:border-white/10"
          >
            <div className="mx-auto max-w-2xl px-5 pt-4 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">Add new idea</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Choose a format to start</p>
                </div>
                <button onClick={onClose} aria-label="Close" className="h-9 w-9 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-white/30 dark:border-white/10 flex items-center justify-center">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {actions.map(({ key, label, icon: Icon, desc }) => (
                  <button
                    key={key}
                    className="group rounded-2xl p-3 text-left bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 hover:shadow-[0_12px_60px_rgba(0,255,198,0.25)] hover:-translate-y-0.5 transition"
                    onClick={() => {
                      onClose?.();
                    }}
                  >
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#00FFC6] to-[#FFD76A] text-slate-900 shadow-[0_10px_30px_rgba(0,255,198,0.35)] flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-2xl p-3 bg-gradient-to-r from-[#00FFC6]/10 to-[#FFD76A]/10 border border-white/20 dark:border-white/10">
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Tip: Long-press the + button to quick capture with camera.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
