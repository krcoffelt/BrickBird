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
    desc: 'Quick edits, new sections, seasonal promos, and the basics that keep your site feeling cared for.',
  },
  {
    title: 'Google Profile',
    desc: 'Posts, photos, Q&A, and category updates that match how customers actually search.',
  },
  {
    title: 'Reviews & Reputation',
    desc: 'A review link system plus reply templates so you respond fast—and sound like you.',
  },
];

const pricing = [
  {
    name: 'Free',
    price: '$0',
    ideal: 'A starter kit to get moving today.',
    includes: ['GBP tune-up checklist', 'Review link + QR templates', 'Simple posting prompts (30 days)'],
  },
  {
    name: 'Essentials',
    price: '$249/mo',
    ideal: 'One location. Monthly care.',
    includes: ['Monthly website + GBP refresh', 'Light review system setup', 'Monthly highlights + next steps'],
  },
  {
    name: 'Momentum',
    price: '$449/mo',
    ideal: 'Weekly presence. More momentum.',
    includes: ['Weekly GBP posts + photo updates', 'Website edits + promo launches', 'Monthly conversion snapshot'],
  },
  {
    name: 'Partner',
    price: '$699/mo',
    ideal: 'High tempo. More hands-on.',
    includes: ['Weekly site + GBP updates', 'Review system + response triage', 'Strategy sync + experiments'],
  },
];

const faqs = [
  ['Do you build new websites?', 'We focus on upkeep. If you need a rebuild, we’ll scope it separately (and keep it sane).'],
  ['How fast do you move?', 'Kickoff in Week 1. First fixes land in 7 days, then updates weekly or monthly.'],
  ['What access do you need?', 'Editor access to your site/CMS + Google Business Profile. That’s usually it.'],
  ['Squarespace or WordPress okay?', 'Yes—Squarespace, WordPress, Webflow, Shopify, and most CMS platforms.'],
  ['Contracts?', 'Month-to-month. Pause or cancel anytime before your next billing date.'],
  ['What results should I expect?', 'Cleaner info, fresher visuals, and more clicks to call / directions—because you look active.'],
  ['What is not included?', 'Ad spend, full rebrands, heavy custom dev, or net-new photo shoots.'],
];

function TrustBullets() {
  const items = [['Fast updates'], ['Low lift'], ['Proof monthly']];
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
        <p className="chip">What we maintain</p>
        <h3 className="mt-2 text-2xl font-semibold">The trust layer.</h3>
        <p className="mt-2 text-sm text-charcoal/70">The places customers verify you before they choose you.</p>

        <div className="mt-6 grid gap-3">
          {[
            ['Website', 'Clarity, promos, and polish'],
            ['Google Profile', 'Posts, photos, Q&A'],
            ['Reviews', 'Asks, replies, momentum'],
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
        <h3 className="text-lg font-semibold">More calls. More direction requests. More confidence.</h3>
        <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
          <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-orange" /> Accurate hours + services everywhere.</li>
          <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-orange" /> Consistent posting keeps you visible.</li>
          <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-orange" /> Replies show you care (and help relevance).</li>
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
          Weekly drop: what shipped, what changed, and what’s next.
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const quotes = [
    '“We finally look current online—and the calls followed.”',
    '“We send one note. It’s done. Huge relief.”',
    '“The replies sound like us now. Customers notice.”',
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

function Pricing({ onPick }: { onPick: (plan: string) => void }) {
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
              <div className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                {tier.name === 'Free' ? 'Starter' : 'Monthly'}
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {tier.name !== 'Free' && (
              <p className="mt-4 text-xs text-charcoal/60">Not included: ad spend, full rebrands, heavy custom dev.</p>
            )}
            <CTAButton className="mt-auto w-full" onClick={() => onPick(tier.name)}>
              {tier.name === 'Free' ? 'Get the free kit' : 'Book a Call'}
            </CTAButton>
            {tier.name === 'Free' && <p className="mt-3 text-xs text-charcoal/60">No credit card. Use it even if you never hire us.</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Process() {
  const steps = [
    ['Audit', 'Access + priorities in one place.'],
    ['Update', 'We make changes (fast).'],
    ['Publish', 'Live with confirmations.'],
    ['Report', 'A short report you’ll actually read.'],
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
          Always Found — Build trust. Get seen.
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="hover:text-charcoal">Privacy</Link>
          <Link href="/terms" className="hover:text-charcoal">Terms</Link>
          <span>© {new Date().getFullYear()} Always Found</span>
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
    plan: 'Momentum',
    agree: false,
  });
  const openWithPlan = (plan: string) => {
    setForm((prev) => ({ ...prev, plan }));
    setOpen(true);
    setSubmitted(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert('Name and email please.');
    console.log('Lead', form);
    setSubmitted(true);
    setTimeout(() => setOpen(false), 1200);
  };
  const heroReveal = useReveal<HTMLDivElement>();

  const bookButton = (
    <CTAButton onClick={() => openWithPlan('Momentum')} aria-haspopup="dialog">
      Book a Call
    </CTAButton>
  );

  return (
    <div>
      <Header onBook={() => setOpen(true)} />

      <main>
        <section className="container-tight grid gap-10 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center" id="top">
          <div ref={heroReveal.ref} className="reveal" data-visible={heroReveal.visible}>
            <Badge>Always Found · Build trust. Get seen.</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Always found. Always chosen.</h1>
            <p className="mt-4 max-w-xl text-lg text-charcoal/75">
              We keep your website, Google profile, and reviews current—so you show up, look active, and get picked.
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
          <Pricing onPick={(plan) => openWithPlan(plan)} />
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
              <h2 className="mt-2 text-3xl font-semibold">Let’s keep you findable.</h2>
              <p className="mt-3 text-charcoal/75">We’ll review your site + Google profile, recommend a cadence, and ship Week 1 updates.</p>
              <ul className="mt-6 space-y-2 text-sm text-charcoal/80">
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-orange" /> Accuracy sweep (hours, services, categories).</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-orange" /> Quick conversion fixes (CTA, clarity, speed basics).</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-orange" /> Cadence recommendation (weekly vs monthly).</li>
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-charcoal/80">
                <div className="flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> hello@alwaysfound.studio</div>
                <div className="flex items-center gap-2"><PhoneIcon className="h-4 w-4" /> (555) 123-0199</div>
              </div>
            </div>
            <Reveal delayMs={120}>
              <div className="card border border-charcoal/10 p-6 shadow-card">
                <h3 className="text-lg font-semibold text-charcoal">Book a Call</h3>
                <p className="text-sm text-charcoal/70">15 minutes. We’ll look live, pick a cadence, and map Week 1.</p>
                <div className="mt-4 rounded-xl bg-sand p-4 text-sm text-charcoal/80">
                  Booking embed placeholder (Calendly iframe). Drop your link anytime.
                </div>
                <CTAButton
                  className="mt-5 w-full"
                  onClick={() => openWithPlan('Momentum')}
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

      <Modal open={open} onClose={() => setOpen(false)} title="Always Found call">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <p className="text-sm text-charcoal/70">Tell us where customers should find you. We’ll reply within one business day.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-charcoal">Interested in</label>
              <select
                className="mt-1 w-full rounded-lg border border-charcoal/10 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
              >
                {pricing.map((t) => (
                  <option key={t.name} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal">Update rhythm</label>
              <select
                className="mt-1 w-full rounded-lg border border-charcoal/10 bg-white px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
                value={form.frequency}
                onChange={(e) => setForm({ ...form, frequency: e.target.value })}
              >
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>
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
            <label className="text-sm font-medium text-charcoal">Business + website/GBP link</label>
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
            {submitted ? 'Sent — watch your inbox' : form.plan === 'Free' ? 'Send me the kit' : 'Book the call'}
          </CTAButton>
        </form>
      </Modal>
    </div>
  );
}
