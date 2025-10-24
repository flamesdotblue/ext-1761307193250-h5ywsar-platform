import { useMemo } from 'react';
import { Pin, Star, Clock, Tag, MessageSquare, Plus } from 'lucide-react';

const sampleNotes = [
  {
    id: 'n1',
    title: 'AI Whiteboard for onboarding',
    content: 'Sketch flow, capture voice notes, generate summary...',
    pinned: true,
    labels: ['Product', 'Design'],
    comments: 3,
    reminder: 'Today 5:00 PM',
  },
  {
    id: 'n2',
    title: 'Grocery voice list – Gujarati',
    content: 'દૂધ, બ્રેડ, ભાત, શાકભાજી...',
    pinned: true,
    labels: ['Personal'],
    comments: 1,
  },
  {
    id: 'n3',
    title: 'Research: Multilingual STT',
    content: 'Compare Whisper vs on-device iOS APIs for hi/gu/en...',
    labels: ['AI', 'Research'],
    comments: 4,
  },
  {
    id: 'n4',
    title: 'Sprint 14 retro notes',
    content: 'What went well, action items, owners...',
    labels: ['Team'],
    reminder: 'Fri 9:00 AM',
    comments: 2,
  },
];

export default function Dashboard({ onAdd }) {
  const pinned = useMemo(() => sampleNotes.filter(n => n.pinned), []);
  const all = useMemo(() => sampleNotes, []);

  return (
    <section id="dashboard" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2"><Star className="h-5 w-5 text-amber-400" /> Pinned</h2>
        <button className="text-sm text-slate-600 dark:text-slate-300 hover:underline">View all</button>
      </div>
      <NoteGrid notes={pinned} />

      <div className="mt-8 mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2"><Pin className="h-5 w-5 rotate-45 text-teal-300" /> All notes</h2>
        <button className="text-sm text-slate-600 dark:text-slate-300 hover:underline">Sort • Recent</button>
      </div>
      <NoteGrid notes={all} />

      <button
        onClick={onAdd}
        aria-label="Create new note"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-[#00FFC6] to-[#FFD76A] text-slate-900 shadow-[0_10px_60px_rgba(0,255,198,0.45)] hover:scale-105 active:scale-100 transition flex items-center justify-center"
      >
        <Plus className="h-6 w-6" />
      </button>
    </section>
  );
}

function NoteGrid({ notes }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map(n => (
        <article key={n.id} className="group rounded-2xl p-4 bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 backdrop-blur-xl hover:shadow-[0_10px_40px_rgba(0,255,198,0.15)] transition">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-snug line-clamp-2">{n.title}</h3>
            {n.pinned && <Pin className="h-4 w-4 text-teal-300 -rotate-45" />}
          </div>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 line-clamp-3">{n.content}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {n.labels?.map((l) => (
              <span key={l} className="text-[11px] px-2 py-1 rounded-full bg-teal-300/15 text-teal-200 border border-teal-200/20">
                <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" />{l}</span>
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              {n.reminder && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-amber-300" /> {n.reminder}
                </span>
              )}
            </div>
            <div className="inline-flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" /> {n.comments || 0}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
