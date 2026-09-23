import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import { modules } from "@/lib/modules";

const dashboardUrl =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:5174";

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-base font-semibold text-white"
            >
              <Image
                src={logo}
                alt=""
                width={28}
                height={28}
                className="rounded"
              />
              SLTS ERP
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Finance, inventory, HR, sales and manufacturing in one system,
              so every team works from the same live data.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Modules</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {modules.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/modules/${m.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#demo"
                  className="hover:text-white transition-colors"
                >
                  Request a demo
                </Link>
              </li>
              <li>
                <a
                  href={dashboardUrl}
                  className="hover:text-white transition-colors"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} SLTS ERP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
