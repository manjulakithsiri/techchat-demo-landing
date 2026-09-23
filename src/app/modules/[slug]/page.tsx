import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ModuleIcon from "@/components/ModuleIcon";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getModule, modules } from "@/lib/modules";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const module_ = getModule(slug);
  if (!module_) return {};

  return {
    title: module_.name,
    description: module_.description,
    openGraph: {
      title: `${module_.name} — SLTS ERP`,
      description: module_.description,
    },
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module_ = getModule(slug);
  if (!module_) notFound();

  const otherModules = modules.filter((m) => m.slug !== slug);

  return (
    <>
      <SiteHeader />

      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/hero3.png')] bg-cover bg-center opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <Link
            href="/#modules"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← All modules
          </Link>
          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-light ring-1 ring-white/20 backdrop-blur">
            <ModuleIcon path={module_.icon} className="h-7 w-7" />
          </div>
          <h1 className="mt-6 max-w-2xl text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            {module_.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed">
            {module_.longDescription}
          </p>
          <Link
            href="/#demo"
            className="mt-9 inline-block bg-brand text-white text-sm font-semibold rounded-lg px-7 py-3.5 shadow-lg shadow-brand/30 hover:bg-brand-dark transition"
          >
            Request a demo
          </Link>
        </div>
      </section>

      <main>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading eyebrow="Features" title="What's included" />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {module_.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <ModuleIcon
                      path='<polyline points="20 6 9 17 4 12"/>'
                      className="h-4 w-4"
                    />
                  </span>
                  <span className="text-sm text-neutral-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading eyebrow="Explore" title="Other modules" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherModules.map((m) => (
                <Link
                  key={m.slug}
                  href={`/modules/${m.slug}`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl mb-5 bg-brand/10 text-brand">
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
