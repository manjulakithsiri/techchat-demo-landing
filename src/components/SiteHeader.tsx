import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";

const dashboardUrl =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:5174";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/80 bg-white/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-neutral-900"
        >
          <Image src={logo} alt="" width={32} height={32} priority />
          SLTS ERP
        </Link>
        <nav className="flex items-center gap-7 text-sm text-neutral-600">
          <Link href="/#modules" className="hidden md:inline hover:text-brand">
            Modules
          </Link>
          <Link href="/#why" className="hidden md:inline hover:text-brand">
            Why SLTS
          </Link>
          <Link href="/#pricing" className="hidden md:inline hover:text-brand">
            Pricing
          </Link>
          <Link
            href="/#testimonials"
            className="hidden md:inline hover:text-brand"
          >
            Testimonials
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={dashboardUrl}
              className="font-medium text-neutral-700 hover:text-brand"
            >
              Log in
            </a>
            <Link
              href="/#demo"
              className="hidden sm:inline-block bg-brand text-white font-medium rounded-lg px-4 py-2 shadow-sm hover:bg-brand-dark transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
