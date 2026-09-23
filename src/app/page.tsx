import Link from "next/link";
import DashboardPreview from "@/components/DashboardPreview";
import DemoRequestForm from "@/components/DemoRequestForm";
import ModuleIcon from "@/components/ModuleIcon";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { modules } from "@/lib/modules";

const benefits = [
  {
    title: "One source of truth",
    body: "Finance, stock, HR and sales all read from the same live data, so teams stop arguing over whose spreadsheet is right.",
    icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  },
  {
    title: "Real-time visibility",
    body: "Stock levels, ledgers and reports update as transactions happen, so the number on screen matches what is actually true.",
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  },
  {
    title: "Controlled access",
    body: "Role-based permissions keep approvals and sensitive records with the people who should see them.",
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  },
];

const demoPoints = [
  "A walkthrough of the modules that matter to you",
  "Shown on a demo copy of your own data",
  "No commitment, and no pressure to buy",
];

const testimonials = [
  {
    quote:
      "This is where a customer will describe the problem SLTS ERP solved for their team.",
    name: "Ayesha Fernando",
    role: "Operations Manager, Ceylon Textiles",
    initials: "AF",
    color: "bg-brand",
  },
  {
    quote:
      "This is where a customer will describe the result — time saved, errors reduced, visibility gained.",
    name: "Daniel Osei",
    role: "Finance Lead, Meridian Foods",
    initials: "DO",
    color: "bg-brand-accent",
  },
  {
    quote:
      "This is where a customer will describe why they chose SLTS ERP over other options.",
    name: "Priya Nair",
    role: "Warehouse Supervisor, Nair Logistics",
    initials: "PN",
    color: "bg-brand-light",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/hero3.png')] bg-cover bg-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-navy/10"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              Enterprise Resource Planning
            </p>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
              One ERP system, run from a single{" "}
              <span className="text-brand-light">dashboard</span>.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              SLTS ERP replaces disconnected spreadsheets and point tools
              with finance, inventory, HR, sales, and manufacturing in one
              place. See it running on a demo copy of your own data.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#demo"
                className="inline-block bg-brand text-white text-sm font-semibold rounded-lg px-7 py-3.5 shadow-lg shadow-brand/30 hover:bg-brand-dark transition"
              >
                Request a demo
              </Link>
              <Link
                href="#modules"
                className="inline-block text-sm font-semibold text-white rounded-lg px-7 py-3.5 border border-white/30 hover:bg-white/10 transition"
              >
                Explore modules
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {modules.map((m) => (
                <li key={m.slug} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-light" />
                  {m.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <main>
        <section id="modules" className="py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="Modules"
              title="Everything your business runs on"
              description="Start with the modules you need today. They share one database, so adding another later takes no re-entry or integration."
            />
            <DashboardPreview />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m, i) => {
                const isAccent = i % 2 === 1;
                return (
                  <Link
                    key={m.slug}
                    href={`/modules/${m.slug}`}
                    className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 ${
                        isAccent
                          ? "bg-brand-accent/10 text-brand-accent"
                          : "bg-brand/10 text-brand"
                      }`}
                    >
                      <ModuleIcon path={m.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {m.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                      Learn more
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="why"
          className="py-24 bg-neutral-50 border-y border-neutral-200 scroll-mt-16"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="Why SLTS ERP"
              title="Built so every team sees the same picture"
              align="center"
            />
            <div className="mt-14 grid md:grid-cols-3 gap-10">
              {benefits.map((b) => (
                <div key={b.title} className="text-center md:text-left">
                  <span className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-light">
                    <ModuleIcon path={b.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-neutral-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="Testimonials"
              title="What customers say"
              description="Placeholder quotes, to be replaced with real customer feedback."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <span
                    aria-hidden
                    className="text-5xl leading-none font-serif text-brand/25"
                  >
                    “
                  </span>
                  <blockquote className="mt-2 flex-1 text-sm text-neutral-700 leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${t.color}`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 pb-24 scroll-mt-16">
          <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[url('/hero3.png')] bg-cover bg-center opacity-30"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-brand/40 via-navy/60 to-navy"
            />
            <div className="relative max-w-xl mx-auto">
              <p className="text-xs font-semibold tracking-widest text-brand-light uppercase">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Priced around your setup
              </h2>
              <p className="mt-4 text-base text-white/75 leading-relaxed">
                Pricing depends on the modules and number of users your
                business needs. Contact sales for pricing tailored to your
                setup.
              </p>
              <Link
                href="#demo"
                className="mt-8 inline-block bg-white text-navy text-sm font-semibold rounded-lg px-7 py-3.5 shadow-lg hover:bg-neutral-100 transition"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="py-24 bg-neutral-50 border-t border-neutral-200 scroll-mt-16"
        >
          <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Request a demo"
                title="See it on your own data"
                description="Tell us a bit about your business and we'll set up a walkthrough."
              />
              <ul className="mt-8 space-y-4 text-sm text-neutral-700">
                {demoPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                      <ModuleIcon
                        path='<polyline points="20 6 9 17 4 12"/>'
                        className="h-3.5 w-3.5"
                      />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg shadow-neutral-900/5">
              <DemoRequestForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
