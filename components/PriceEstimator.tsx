'use client';
import { useMemo, useState } from 'react';

const planByScore = (score: number) => {
  if (score <= 2) return 'Starter';
  if (score <= 4) return 'Growth';
  return 'Pro';
};

export function PriceEstimator() {
  const [locations, setLocations] = useState(1);
  const [frequency, setFrequency] = useState<'monthly' | 'weekly'>('monthly');

  const score = useMemo(() => locations + (frequency === 'weekly' ? 2 : 0), [locations, frequency]);
  const plan = planByScore(score);
  const hint = {
    Starter: 'Solo location, light changes, steady visibility.',
    Growth: 'Multi-location or weekly publishing cadence.',
    Pro: 'High-tempo updates, richer reporting, more hands-on.',
  }[plan];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="chip">Price estimator</p>
          <h3 className="text-lg font-semibold">Suggested plan: {plan}</h3>
          <p className="text-sm text-charcoal/70">{hint}</p>
        </div>
        <div className="hidden text-sm text-charcoal/60 sm:block">Quick signal—exact quote after call.</div>
      </div>
      <div className="mt-5 space-y-4">
        <label className="block text-sm font-medium text-charcoal">Locations: {locations}</label>
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={locations}
          onChange={(e) => setLocations(Number(e.target.value))}
          className="w-full accent-orange"
        />
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-charcoal">Update rhythm</legend>
          <div className="flex gap-3">
            {['monthly', 'weekly'].map((opt) => (
              <label key={opt} className="flex cursor-pointer items-center gap-2 rounded-full border border-charcoal/10 px-3 py-2 hover:border-orange">
                <input
                  type="radio"
                  name="freq"
                  value={opt}
                  checked={frequency === opt}
                  onChange={(e) => setFrequency(e.target.value as 'monthly' | 'weekly')}
                  className="text-orange focus:ring-orange"
                />
                <span className="capitalize">{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-5 rounded-xl bg-sand px-4 py-3 text-sm text-charcoal/80">
        <p className="font-semibold text-charcoal">What to expect</p>
        <ul className="mt-2 list-disc pl-5">
          <li>Kickoff in Week 1 with access + priorities.</li>
          <li>Updates {frequency === 'weekly' ? 'every week' : 'monthly with quick wins first'}.</li>
          <li>Report drop + recommendations sent Friday.</li>
        </ul>
      </div>
    </div>
  );
}
