'use client';
import { useState } from 'react';

export function BeforeAfter() {
  const [mode, setMode] = useState<'before' | 'after'>('before');
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="chip">Before / After</p>
          <h3 className="text-lg font-semibold">See the polish</h3>
          <p className="text-sm text-charcoal/70">GBP + site tidy examples.</p>
        </div>
        <div className="inline-flex rounded-full bg-charcoal/5 p-1">
          {['before', 'after'].map((state) => (
            <button
              key={state}
              onClick={() => setMode(state as 'before' | 'after')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                mode === state ? 'bg-orange text-charcoal shadow' : 'text-charcoal/70'
              }`}
              aria-pressed={mode === state}
            >
              {state}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl border border-charcoal/10 bg-gradient-to-br from-white to-sand p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-charcoal/40">Website</div>
          <div className="space-y-3 text-sm text-charcoal/80">
            <div className={`rounded-lg p-3 ${mode === 'after' ? 'bg-orange/10 border border-orange/30' : 'bg-charcoal/5'}`}>
              {mode === 'before' ? 'Outdated hours, old hero copy, missing CTA.' : 'Fresh hours, CTA above fold, seasonal promo bar.'}
            </div>
            <div className={`rounded-lg p-3 ${mode === 'after' ? 'bg-orange/10 border border-orange/30' : 'bg-charcoal/5'}`}>
              {mode === 'before' ? 'No update log.' : 'Change log: speed pass + new review snippet.'}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-charcoal/10 bg-gradient-to-br from-white to-sand p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-charcoal/40">Google Profile</div>
          <div className="space-y-3 text-sm text-charcoal/80">
            <div className={`rounded-lg p-3 ${mode === 'after' ? 'bg-orange/10 border border-orange/30' : 'bg-charcoal/5'}`}>
              {mode === 'before' ? 'Sparse posts, outdated photos.' : 'Weekly posts, new photos, Q&A refreshed.'}
            </div>
            <div className={`rounded-lg p-3 ${mode === 'after' ? 'bg-orange/10 border border-orange/30' : 'bg-charcoal/5'}`}>
              {mode === 'before' ? 'Reviews unanswered.' : 'Templates applied, responses within 24h.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
