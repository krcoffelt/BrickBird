'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { CTAButton } from '../components/CTAButton';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';
import { PriceEstimator } from '../../components/PriceEstimator';
import { BeforeAfter } from '../../components/BeforeAfter';
import { useReveal } from '../../lib/useReveal';
import { CheckIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Website Upkeep',
    desc: 'Edits, new sections, promo bars, speed basics, uptime eyes on.',
  },
  {
    title: 'Google Profile',
    desc: 'Posts, updates, photos, Q&A tuned so you surface + convert.',
  },
  {
    title: 'Reviews & Reputation',
    desc: 'Review link system, response templates, monthly momentum plan.',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '$690/mo',
    ideal: 'One location, light updates.',
    includes: ['Site + GBP updates monthly', 'Speed & accessibility basics', 'Quarterly mini-report'],
  },
  {
    name: 'Growth',
    price: '$1,090/mo',
    ideal: 'Multi-location or weekly cadence.',
    includes: ['Weekly GBP posts + photo drops', 'Website edits + promo launches', 'Monthly conversion report'],
  },
  {
    name: 'Pro',
    price: '$1,690/mo',
    ideal: 'High-tempo, more collaboration.',
    includes: ['Weekly site + GBP updates', 'Response templates + triage', 'Strategy sync + experiments'],
  },
];

const faqs = [
  ['Do you build new websites?', 'We focus on keeping what you have sharp; if a rebuild is needed, we scope separately.'],
  ['How fast do you move?', 'Kickoff in Week 1. First visible changes within 7 days, then weekly or monthly updates.'],
  ['What access do you need?', 'Editor access to your site/CMS and Google Business Profile plus a shared inbox for reviews.'],
  ['Squarespace or WordPress okay?', 'Yes. We work across popular CMS platforms and handle light dev tweaks as needed.'],
  ['Contracts?', 'Month-to-month. Stay because it performs, not because of lock-in.'],
  ['What results should I expect?', 'More accurate info, fresher visuals, better click-to-call and direction requests.'],
  ['What is not included?', 'Ad spend, full rebrands, heavy custom dev.'],
];

function TrustBullets() {
  const items = [
    ['Fast', 'Updates shipped weekly, not someday.'],
    ['Simple', 'You send a note; we polish, publish, confirm.'],
    ['Measurable', 'Track calls, clicks, and direction requests.'],
  ];
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {items.map(([title, desc]) => (
        <div key={title} className="rounded-xl border border-charcoal/5 bg-white/80 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-charcoal">
            <div className="h-2 w-2 rounded-full bg-orange" /> {title}
          </div>
          <p className="mt-2 text-sm text-charcoal/70">{desc}</p>
        </div>
      ))}
    </div>
  );
}

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="section-pad">
      <div ref={ref} className={`container-tight reveal`} data-visible={visible}>
        {kicker && <p className="chip">{kicker}</p>}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="card grid gap-6 p-6 md:grid-cols-2">
      <div>
        <p className="chip">Example outcomes</p>
        <h3 className="text-lg font-semibold">More calls. More direction requests. Higher trust.</h3>
        <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
          <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-orange" /> Fresh hours + promos reflect everywhere.</li>
          <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-orange" /> Weekly GBP posts keep you above nearby options.</li>
          <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-orange" /> Review replies show you care and improve keywords.</li>
        </ul>
      </div>
      <div className="rounded-xl border border-charcoal/10 bg-gradient-to-br from-white to-sand p-4">
        <div className="flex items-center justify-between text-sm text-charcoal/70">
          <span>Week over week</span>
          <span className="pill bg-white text-orange">+18%</span>
        </div>
        <div className="mt-4 space-y-3">
          {[['Calls', 64], ['Direction requests', 92], ['Website clicks', 118]].map(([label, value]) => (
            <div key={label}>
              <div className="flex items-center justify-between text-sm font-medium text-charcoal">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-charcoal/5">
                <div className="h-full rounded-full bg-orange" style={{ width: `${Math.min(Number(value) / 1.6, 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-orange/30 bg-orange/10 p-3 text-xs text-charcoal/80">
          Weekly drop: highlights, fixes shipped, next moves. No fluff.
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const quotes = [
    '“We finally look open online—and the calls followed.”',
    '“Changes go live without hand-holding. Huge relief.”',
    '“Review replies sound human now. Feels like us.”',
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {quotes.map((q, i) => (
        <div key={i} className="card p-5 text-sm text-charcoal/80">
          <div className="mb-2 h-1 w-10 rounded-full bg-orange" />
          {q}
        </div>
      ))}
    </div>
  );
}

function Pricing() {
  return (
    <div className="grid-auto">
      {pricing.map((tier) => (
        <div key={tier.name} className="card flex flex-col p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="chip">{tier.name}</p>
              <h3 className="text-2xl font-semibold">{tier.price}</h3>
              <p className="text-sm text-charcoal/70">{tier.ideal}</p>
            </div>
            <div className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">Simple</div>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
            {tier.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 text-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-charcoal/60">Not included: ad spend, full rebrands, heavy custom dev.</p>
          <CTAButton className="mt-auto w-full" onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}>
            Choose {tier.name}
          </CTAButton>
        </div>
      ))}
    </div>
  );
}

function Process() {
  const steps = [
    ['Audit', 'Access + quick wins mapped.'],
    ['Update', 'Site + GBP content refreshed.'],
    ['Publish', 'Changes live with confirmations.'],
    ['Report', 'Friday drop: results + next moves.'],
  ];
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map(([title, desc], idx) => (
        <div key={title} className="card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-charcoal">
            <span className="pill bg-charcoal text-white text-xs">{idx + 1}</span>
            {title}
          </div>
          <p className="mt-3 text-sm text-charcoal/70">{desc}</p>
          {idx === 0 && <p className="mt-4 text-xs text-orange">Week 1 setup, then weekly updates.</p>}
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  return (
    <dl className="space-y-4">
      {faqs.map(([q, a]) => (
        <div key={q} className="card p-5">
          <dt className="text-base font-semibold text-charcoal">{q}</dt>
          <dd className="mt-2 text-sm text-charcoal/70">{a}</dd>
        </div>
      ))}
    </dl>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/70">
      <div className="container-tight flex flex-col gap-4 py-8 text-sm text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-charcoal">
          <div className="h-8 w-8 rounded-lg bg-charcoal" />
          BrickBird — Build trust. Get seen.
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="hover:text-charcoal">Privacy</Link>
          <Link href="/terms" className="hover:text-charcoal">Terms</Link>
          <span>© {new Date().getFullYear()} BrickBird</span>
          <div className="flex gap-2 text-charcoal/60">
            <span>IG</span>
            <span>LI</span>
            <span>YT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    link: '',
    email: '',
    phone: '',
    frequency: 'monthly',
    agree: false,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert('Name and email please.');
    console.log('Lead', form);
    setSubmitted(true);
    setTimeout(() => setOpen(false), 1200);
  };
  const heroReveal = useReveal<HTMLDivElement>();

  const bookButton = (
    <CTAButton onClick={() => { setOpen(true); setSubmitted(false); }} aria-haspopup="dialog">
      Book a Call
    </CTAButton>
  );

  return (
    <div>
      <Header onBook={() => setOpen(true)} />

      <main>
        <section className="container-tight grid gap-10 pb-16 pt-14 sm:grid-cols-[1.2fr_1fr] sm:items-center" id="top">
          <div ref={heroReveal.ref} className="reveal" data-visible={heroReveal.visible}>
            <Badge>BrickBird · Build trust. Get seen.</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Your business, always up to date.</h1>
            <p className="mt-4 max-w-xl text-lg text-charcoal/75">
              We keep your website + Google profile fresh, accurate, and converting—so you get found and chosen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {bookButton}
              <CTAButton variant="secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                See Pricing
              </CTAButton>
            </div>
            <TrustBullets />
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-orange/20 blur-2xl" aria-hidden />
            <div className="card relative overflow-hidden p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal text-white">
                    <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden>
                      <path d="M8 32c12-8 20-8 32 0v6l-16 8-16-8z" fill="currentColor" opacity="0.9" />
                      <path d="M24 20c6-6 14-8 26-4l-8 6c-4 2-9 6-12 12l-6-14z" fill="currentColor" opacity="0.6" />
                      <rect x="30" y="34" width="14" height="10" rx="2" fill="currentColor" opacity="0.9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">BrickBird Care</p>
                    <p className="text-xs text-charcoal/60">Live status · On schedule</p>
                  </div>
                </div>
                <span className="pill bg-orange/15 text-orange">Weekly</span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-charcoal/80">
                <div className="flex items-center justify-between rounded-lg border border-charcoal/5 bg-sand/60 p-3">
                  <div>
                    <p className="font-semibold">Google posts</p>
                    <p className="text-xs text-charcoal/60">Queued for Friday 9am</p>
                  </div>
                  <span className="pill bg-white text-orange">3 ready</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-charcoal/5 bg-white/80 p-3">
                  <div>
                    <p className="font-semibold">Site edits</p>
                    <p className="text-xs text-charcoal/60">Promo bar + hours update</p>
                  </div>
                  <span className="pill bg-white text-charcoal">In QA</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-charcoal/5 bg-white/80 p-3">
                  <div>
                    <p className="font-semibold">Reviews</p>
                    <p className="text-xs text-charcoal/60">5 replies drafted</p>
                  </div>
                  <span className="pill bg-orange/10 text-orange">Review</span>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-orange/20 bg-orange/10 p-4 text-sm">
                “Just keep us chosen each week.” — our favorite brief.
              </div>
            </div>
          </div>
        </section>

        <Section id="services" title="Services" kicker="What we handle">
          <div className="grid-auto">
            {services.map((service) => (
              <div key={service.title} className="card p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-orange/15" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm text-charcoal/70">{service.desc}</p>
                <button className="mt-4 text-sm font-semibold text-orange hover:underline" onClick={() => setOpen(true)}>
                  Book a call →
                </button>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proof" title="Proof" kicker="Evidence over hype">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <DashboardMock />
            <BeforeAfter />
          </div>
          <div className="mt-6">
            <Testimonials />
          </div>
        </Section>

        <Section id="pricing" title="Pricing" kicker="Clear plans">
          <Pricing />
          <div className="mt-6">
            <PriceEstimator />
          </div>
        </Section>

        <Section id="process" title="Process" kicker="Tidy and predictable">
          <Process />
        </Section>

        <Section id="faq" title="FAQ" kicker="Details">
          <FAQ />
        </Section>

        <section id="book" className="section-pad">
          <div className="container-tight card grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="chip">Ready when you are</p>
              <h2 className="mt-2 text-3xl font-semibold">Let’s keep you chosen.</h2>
              <p className="mt-3 text-charcoal/75">We’ll review your site + GBP, suggest a plan, and start updates in Week 1.</p>
              <div className="mt-6 rounded-xl bg-sand p-4 text-sm text-charcoal/80">
                Calendly or your scheduler embed could live here. For now, we’ll confirm by email.
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-charcoal/80">
                <div className="flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> hello@brickbird.studio</div>
                <div className="flex items-center gap-2"><PhoneIcon className="h-4 w-4" /> (555) 123-0199</div>
              </div>
            </div>
            <div className="card border border-charcoal/10 p-6 shadow-card">
              <h3 className="text-lg font-semibold text-charcoal">Book a Call</h3>
              <p className="text-sm text-charcoal/70">Tell us about your locations and platforms.</p>
              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium text-charcoal">Name</label>
                  <input
                    required
                    className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Business name</label>
                  <input
                    className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-charcoal">Website or GBP link</label>
                    <input
                      className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                      value={form.link}
                      onChange={(e) => setForm({ ...form, link: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">Email</label>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-charcoal">Phone</label>
                    <input
                      className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">How often to update?</label>
                    <select
                      className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                    value={form.frequency}
                    onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                  >
                    <option value="monthly">Monthly rhythm</option>
                    <option value="weekly">Weekly rhythm</option>
                  </select>
                </div>
                </div>
                <label className="flex items-center gap-2 text-sm text-charcoal/70">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    className="text-orange focus:ring-orange"
                  />
                  Quick audit is okay? We’ll review your site + GBP.
                </label>
                <CTAButton type="submit" className="w-full">
                  {submitted ? 'Sent — we’ll reply today' : 'Send request'}
                </CTAButton>
              </form>
              <p className="mt-3 text-xs text-charcoal/60">We’ll confirm within one business day. No spam.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Modal open={open} onClose={() => setOpen(false)} title="BrickBird call">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-charcoal">Name</label>
            <input
              className="mt-1 w-full rounded-lg border border-charcoal/10 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal">Business + Link</label>
            <input
              className="mt-1 w-full rounded-lg border border-charcoal/10 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-charcoal">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-charcoal/10 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal">Phone</label>
              <input
                className="mt-1 w-full rounded-lg border border-charcoal/10 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-charcoal/70">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="text-orange focus:ring-orange"
            />
            Quick audit is okay before our call.
          </label>
          <CTAButton type="submit" className="w-full">
            {submitted ? 'Sent — watch your inbox' : 'Book the call'}
          </CTAButton>
        </form>
      </Modal>
    </div>
  );
}
