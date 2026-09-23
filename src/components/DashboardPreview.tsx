import Image from "next/image";
import ModuleIcon from "@/components/ModuleIcon";
import { modules } from "@/lib/modules";
import logo from "../../public/logo.jpg";

const kpis = [
  { label: "Revenue (MTD)", value: "$248,300", delta: "+12.4%", up: true },
  { label: "Open orders", value: "184", delta: "+8", up: true },
  { label: "Stock value", value: "$612,900", delta: "-2.1%", up: false },
  { label: "Active staff", value: "96", delta: "+3", up: true },
];

const revenue = [42, 55, 48, 62, 58, 71, 66, 80, 74, 88, 82, 96];
const expenses = [30, 34, 33, 40, 38, 44, 43, 50, 47, 53, 52, 58];

const invoices = [
  { id: "INV-1042", customer: "Ceylon Textiles", amount: "$12,400", status: "Paid" },
  { id: "INV-1043", customer: "Meridian Foods", amount: "$8,150", status: "Pending" },
  { id: "INV-1044", customer: "Nair Logistics", amount: "$5,720", status: "Paid" },
  { id: "INV-1045", customer: "Lanka Hardware", amount: "$3,980", status: "Overdue" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-brand-accent/15 text-brand-accent",
  Pending: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-600",
};

function linePoints(data: number[], w: number, h: number) {
  const max = 100;
  return data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - (v / max) * h}`)
    .join(" ");
}

export default function DashboardPreview() {
  const chartW = 320;
  const chartH = 110;

  return (
    <figure className="mt-12">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-brand/10 ring-1 ring-neutral-900/5">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 rounded-md bg-white px-3 py-0.5 text-xs text-neutral-400">
            SLTS ERP · Dashboard
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-52 shrink-0 bg-navy p-4 text-white/70 md:block">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Image src={logo} alt="" width={22} height={22} className="rounded" />
              SLTS ERP
            </div>
            <ul className="mt-6 space-y-1 text-xs">
              {modules.map((m, i) => (
                <li
                  key={m.slug}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${
                    i === 0 ? "bg-white/10 text-white" : ""
                  }`}
                >
                  <ModuleIcon path={m.icon} className="h-4 w-4 shrink-0" />
                  <span className="truncate">{m.name}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 bg-neutral-50 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Overview
                </p>
                <p className="text-xs text-neutral-500">This month</p>
              </div>
              <span className="rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-white">
                New invoice
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-xl border border-neutral-200 bg-white p-3.5"
                >
                  <p className="text-[11px] text-neutral-500">{k.label}</p>
                  <p className="mt-1 text-lg font-semibold text-neutral-900">
                    {k.value}
                  </p>
                  <p
                    className={`mt-0.5 text-[11px] font-medium ${
                      k.up ? "text-brand-accent" : "text-red-500"
                    }`}
                  >
                    {k.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-5">
              <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-neutral-900">
                    Revenue vs expenses
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                      Revenue
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-brand-accent" />
                      Expenses
                    </span>
                  </div>
                </div>
                <svg
                  viewBox={`0 0 ${chartW} ${chartH}`}
                  className="mt-3 min-h-32 w-full flex-1"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Sample revenue and expenses chart"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      x2={chartW}
                      y1={(i / 3) * chartH}
                      y2={(i / 3) * chartH}
                      stroke="#e5e5e5"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                  <polygon
                    points={`0,${chartH} ${linePoints(revenue, chartW, chartH)} ${chartW},${chartH}`}
                    fill="#0b5fa8"
                    opacity="0.08"
                  />
                  <polyline
                    points={linePoints(revenue, chartW, chartH)}
                    fill="none"
                    stroke="#0b5fa8"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <polyline
                    points={linePoints(expenses, chartW, chartH)}
                    fill="none"
                    stroke="#5ab446"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-2">
                <p className="text-xs font-semibold text-neutral-900">
                  Recent invoices
                </p>
                <ul className="mt-3 divide-y divide-neutral-100">
                  {invoices.map((inv) => (
                    <li
                      key={inv.id}
                      className="flex items-center justify-between gap-2 py-2 text-[11px]"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-neutral-800">{inv.id}</p>
                        <p className="truncate text-neutral-500">
                          {inv.customer}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-neutral-800">
                          {inv.amount}
                        </p>
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 font-medium ${statusStyles[inv.status]}`}
                        >
                          {inv.status}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-neutral-500">
        Sample dashboard with illustrative data.
      </figcaption>
    </figure>
  );
}
