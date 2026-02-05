'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { CTAButton } from '../../components/CTAButton';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';
import { BeforeAfter } from '../../components/BeforeAfter';
import { Reveal } from '../../components/Reveal';
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
  const items = [['Fast'], ['Simple'], ['Measurable']];
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal/70">
      {items.map(([title], idx) => (
        <span key={title} className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-orange" aria-hidden />
          <span className="font-semibold text-charcoal">{title}</span>
          {idx < items.length - 1 && <span className="ml-2 hidden text-charcoal/20 sm:inline">/</span>}
        </span>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="card relative overflow-hidden p-6">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/15 blur-2xl" aria-hidden />
      <div className="absolute -bottom-14 -left-10 h-52 w-52 rounded-full bg-glow/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="chip">What you get</p>
        <h3 className="mt-2 text-2xl font-semibold">Always current.</h3>
        <p className="mt-2 text-sm text-charcoal/70">Three surfaces. One rhythm. Zero scramble.</p>

        <div className="mt-6 grid gap-3">
          {[
            ['Website', 'Fresh copy + promos'],
            ['Google Profile', 'Posts + photos'],
            ['Reviews', 'Asks + replies'],
          ].map(([label, sub]) => (
            <div key={label} className="flex items-center justify-between rounded-xl border border-charcoal/10 bg-white/70 p-4">
              <div>
                <p className="text-sm font-semibold text-charcoal">{label}</p>
                <p className="mt-1 text-xs text-charcoal/60">{sub}</p>
              </div>
              <span className="pill bg-orange/10 text-orange">Kept current</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-charcoal/60">Week 1 setup, then weekly or monthly updates.</p>
      </div>
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
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <div className="section-rule" aria-hidden />
          </div>
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
        <Reveal key={q} delayMs={i * 80}>
          <div className="card p-5 text-sm text-charcoal/80">
            <div className="mb-2 h-1 w-10 rounded-full bg-orange" />
            {q}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Pricing({ onBook }: { onBook: () => void }) {
  return (
    <div className="grid-auto">
      {pricing.map((tier, i) => (
        <Reveal key={tier.name} delayMs={i * 90}>
          <div className="card flex flex-col p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="chip">{tier.name}</p>
                <h3 className="text-2xl font-semibold">{tier.price}</h3>
                <p className="text-sm text-charcoal/70">{tier.ideal}</p>
              </div>
              <div className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">Clear</div>
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
            <CTAButton className="mt-auto w-full" onClick={onBook}>
              Book a Call
            </CTAButton>
          </div>
        </Reveal>
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
        <Reveal key={title} delayMs={idx * 80}>
          <div className="card p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-charcoal">
              <span className="pill bg-charcoal text-white text-xs">{idx + 1}</span>
              {title}
            </div>
            <p className="mt-3 text-sm text-charcoal/70">{desc}</p>
            {idx === 0 && <p className="mt-4 text-xs text-orange">Week 1 setup, then weekly updates.</p>}
          </div>
        </Reveal>
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
        <section className="container-tight grid gap-10 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center" id="top">
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
          <div className="relative hidden lg:block">
            <Reveal delayMs={120}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        <Section id="services" title="Services" kicker="What we handle">
          <div className="grid-auto">
            {services.map((service, i) => (
              <Reveal key={service.title} delayMs={i * 80}>
                <div className="card p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange/15" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-charcoal/70">{service.desc}</p>
                  <button className="mt-4 text-sm font-semibold text-orange hover:underline" onClick={() => setOpen(true)}>
                    Book a call →
                  </button>
                </div>
              </Reveal>
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
          <Pricing onBook={() => { setOpen(true); setSubmitted(false); }} />
          <p className="mt-6 text-sm text-charcoal/70">Not sure? Book a call and we’ll recommend the right cadence.</p>
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
              <ul className="mt-6 space-y-2 text-sm text-charcoal/80">
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-orange" /> Accuracy sweep (hours, services, categories).</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-orange" /> Quick conversion fixes (CTA, clarity, speed basics).</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-orange" /> Update cadence recommendation (weekly vs monthly).</li>
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-charcoal/80">
                <div className="flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> hello@brickbird.studio</div>
                <div className="flex items-center gap-2"><PhoneIcon className="h-4 w-4" /> (555) 123-0199</div>
              </div>
            </div>
            <Reveal delayMs={120}>
              <div className="card border border-charcoal/10 p-6 shadow-card">
                <h3 className="text-lg font-semibold text-charcoal">Book a Call</h3>
                <p className="text-sm text-charcoal/70">15 minutes. We’ll look live, pick a cadence, and ship Week 1 updates.</p>
                <div className="mt-4 rounded-xl bg-sand p-4 text-sm text-charcoal/80">
                  Booking embed placeholder (Calendly iframe). Add your link anytime.
                </div>
                <CTAButton
                  className="mt-5 w-full"
                  onClick={() => { setOpen(true); setSubmitted(false); }}
                  aria-haspopup="dialog"
                >
                  Open booking form
                </CTAButton>
                <p className="mt-3 text-xs text-charcoal/60">We’ll confirm within one business day. No spam.</p>
              </div>
            </Reveal>
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
