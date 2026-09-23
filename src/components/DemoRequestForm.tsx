"use client";

import { useState, type FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const industries = [
  "Retail & E-commerce",
  "Manufacturing",
  "Healthcare",
  "Construction",
  "Logistics & Transportation",
  "Education",
  "Hospitality",
  "Professional Services",
  "Other",
];

export default function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(`${API_URL}/api/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-neutral-700">
        Thanks — we&apos;ve received your request and will be in touch
        shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="block text-sm text-neutral-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div className="sm:col-span-1">
        <label
          htmlFor="email"
          className="block text-sm text-neutral-700 mb-1"
        >
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div className="sm:col-span-1">
        <label
          htmlFor="company"
          className="block text-sm text-neutral-700 mb-1"
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div className="sm:col-span-1">
        <label
          htmlFor="phone"
          className="block text-sm text-neutral-700 mb-1"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div className="sm:col-span-1">
        <label
          htmlFor="industry"
          className="block text-sm text-neutral-700 mb-1"
        >
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          defaultValue=""
          required
          className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 bg-white"
        >
          <option value="" disabled>
            Select an industry
          </option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm text-neutral-700 mb-1"
        >
          What are you looking to solve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-brand text-white text-sm rounded-lg px-6 py-3 font-medium shadow-sm disabled:opacity-50 hover:bg-brand-dark hover:shadow-md transition"
        >
          {status === "submitting" ? "Sending…" : "Request a demo"}
        </button>
      </div>
    </form>
  );
}
