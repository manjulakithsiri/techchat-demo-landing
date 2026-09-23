export type Module = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
};

export const modules: Module[] = [
  {
    slug: "finance-accounting",
    name: "Finance & Accounting",
    description:
      "General ledger, invoicing, and multi-currency reporting in one place.",
    longDescription:
      "Keep every invoice, payment, and journal entry in one ledger instead of scattered spreadsheets. SLTS ERP's finance module gives your accounting team a single source of truth that the rest of the business reports off, closing the gap between what sales, inventory, and finance each think is true.",
    features: [
      "General ledger with multi-currency support",
      "Automated invoicing and payment tracking",
      "Financial statements generated from live data",
      "Role-based access for approvals and audits",
    ],
    icon: '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/>',
  },
  {
    slug: "inventory-warehousing",
    name: "Inventory & Warehousing",
    description:
      "Track stock across locations with real-time levels and reorder alerts.",
    longDescription:
      "See exactly what's on hand, where it is, and when it needs reordering — across every warehouse or store location. Stock levels update as sales and purchases happen, so the number on screen matches what's actually on the shelf.",
    features: [
      "Real-time stock levels across multiple locations",
      "Automatic low-stock and reorder alerts",
      "Stock transfers between warehouses",
      "Batch and serial number tracking",
    ],
    icon: '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  },
  {
    slug: "hr-payroll",
    name: "HR & Payroll",
    description:
      "Employee records, attendance, and payroll runs handled without spreadsheets.",
    longDescription:
      "Run payroll from the same records your team uses for attendance and leave, so numbers don't have to be re-typed between systems every month. Employee history, documents, and pay runs all live in one place.",
    features: [
      "Centralised employee records and documents",
      "Attendance and leave tracking",
      "Payroll runs with automatic deductions",
      "Self-service access for employees",
    ],
    icon: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.2"/><path d="M15.8 20c.2-2.5 1.7-4.5 4-5"/>',
  },
  {
    slug: "sales-crm",
    name: "Sales & CRM",
    description:
      "Quotes, orders, and customer history connected to fulfilment.",
    longDescription:
      "Every quote, order, and customer conversation stays linked to what actually gets fulfilled and invoiced. Your sales team sees stock availability before promising a delivery date, and finance sees the order the moment it's confirmed.",
    features: [
      "Quote-to-order workflow",
      "Full customer order history",
      "Stock availability visible during quoting",
      "Orders flow straight into fulfilment and billing",
    ],
    icon: '<circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/><path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6"/>',
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Bills of materials, work orders, and production tracking.",
    longDescription:
      "Plan production against bills of materials that stay in sync with your actual inventory, so a work order doesn't get scheduled against stock that doesn't exist. Track a job from raw materials to finished goods.",
    features: [
      "Bill of materials management",
      "Work order scheduling and tracking",
      "Raw material consumption tied to inventory",
      "Production cost tracking",
    ],
    icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  },
  {
    slug: "reporting",
    name: "Reporting",
    description:
      "Dashboards and exports built from the same data across every module.",
    longDescription:
      "Reports are built from the same live data as every other module, so a finance report and an inventory report never disagree about what happened last month. Export anything, or watch it update on a dashboard in real time.",
    features: [
      "Dashboards shared across all modules",
      "Exports to spreadsheet formats",
      "Scheduled report delivery",
      "Drill down from a summary to the source record",
    ],
    icon: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  },
];

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
