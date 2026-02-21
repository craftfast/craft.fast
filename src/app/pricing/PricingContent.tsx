"use client";

/**
 * PricingContent - Client component for the www pricing page.
 *
 * Includes monthly/annual billing toggle, plan cards, detailed provider
 * cost tables (AI models, sandbox, database, deployment), FAQs, and CTAs.
 * All subscription actions redirect to the main app.
 */

import { useState } from "react";
import Link from "next/link";

interface Plan {
  name: string;
  id: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  monthlyCredits: number;
  annualCredits: number;
  features: string[];
  popular: boolean;
}

interface AIModel {
  name: string;
  provider: string;
  input: number;
  output: number;
  context: string;
  tier: string;
  link: string;
}

interface ExternalLinks {
  anthropic: string;
  openai: string;
  google: string;
  xai: string;
  vercelSandbox: string;
  neon: string;
  vercel: string;
  dodopayments: string;
}

interface PricingContentProps {
  plans: Plan[];
  enterpriseFeatures: string[];
  aiModels: AIModel[];
  faqs: { q: string; a: string }[];
  externalLinks: ExternalLinks;
  appUrl: string;
  enterpriseEmail: string;
}

export function PricingContent({
  plans,
  enterpriseFeatures,
  aiModels,
  faqs,
  externalLinks,
  appUrl,
  enterpriseEmail,
}: PricingContentProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );

  return (
    <>
      {/* Hero */}
      <section className="text-center py-16 sm:py-20 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Pricing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Get credits to access AI models and development tools. All plans
          include zero markup on provider costs. 10% platform fee applies on all
          purchases.
        </p>
      </section>

      {/* Billing Period Toggle */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                billingPeriod === "monthly"
                  ? "bg-white dark:bg-neutral-900 text-foreground shadow-sm"
                  : "text-neutral-500 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                billingPeriod === "annual"
                  ? "bg-white dark:bg-neutral-900 text-foreground shadow-sm"
                  : "text-neutral-500 hover:text-foreground"
              }`}
            >
              Annual
              <span className="px-2 py-0.5 text-xs font-semibold bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full">
                Save 2 months
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const price =
              billingPeriod === "annual"
                ? plan.annualPrice / 12
                : plan.monthlyPrice;
            const credits =
              billingPeriod === "annual"
                ? plan.annualCredits
                : plan.monthlyCredits;
            const totalPrice =
              billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative bg-white dark:bg-neutral-900 rounded-2xl border ${
                  plan.popular
                    ? "border-neutral-900 dark:border-neutral-100 shadow-lg"
                    : "border-neutral-200 dark:border-neutral-700"
                } p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${Math.round(price)}
                    </span>
                    <span className="text-neutral-500">/mo</span>
                  </div>
                  {billingPeriod === "annual" && (
                    <p className="text-sm text-neutral-500 mt-1">
                      ${totalPrice} billed annually
                    </p>
                  )}
                  <p className="text-sm text-neutral-500 mt-1">
                    ${credits} in credits
                    {billingPeriod === "annual" ? "/year" : "/month"}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <svg
                        className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`${appUrl}/billing?plans&plan=${plan.id}&period=${billingPeriod}`}
                  className={`w-full py-3 px-6 text-center font-medium rounded-full transition-colors block ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200"
                      : "bg-neutral-100 dark:bg-neutral-800 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional credits info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-500">
            Need more credits? You can{" "}
            <Link
              href={`${appUrl}/settings/billing`}
              className="underline hover:text-foreground transition-colors"
            >
              top up anytime
            </Link>{" "}
            with a 10% platform fee. First-time subscribers get a 10% signup
            bonus.
          </p>
        </div>
      </section>

      {/* Enterprise */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Enterprise
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Custom plans for large teams and organizations. Get dedicated
                infrastructure, premium support, and advanced security features.
              </p>
              <a
                href={`mailto:${enterpriseEmail}`}
                className="inline-flex px-8 py-3 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full font-medium transition-colors"
              >
                Contact Sales
              </a>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {enterpriseFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <svg
                    className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AI Model Pricing Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              AI Model Costs
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Zero markup on all AI providers. You pay exact provider rates.
            </p>
          </div>
          <span className="text-sm text-neutral-500 hidden sm:block">
            {aiModels.length} models &bull; Zero markup
          </span>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Provider
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                    Tier
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                    Input/1M tokens
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                    Output/1M tokens
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                    Context
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                {aiModels.map((model, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      <a
                        href={model.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {model.name}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      {model.provider}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          model.tier === "Fast"
                            ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                            : "bg-neutral-300 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-200"
                        }`}
                      >
                        {model.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                      ${model.input.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                      ${model.output.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-neutral-600 dark:text-neutral-400 text-right">
                      {model.context}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/30 border-t border-neutral-200 dark:border-neutral-700 text-xs text-neutral-500">
            Prices per 1M tokens. Verify at:{" "}
            <a
              href={externalLinks.anthropic}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Anthropic
            </a>
            {" \u2022 "}
            <a
              href={externalLinks.openai}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              OpenAI
            </a>
            {" \u2022 "}
            <a
              href={externalLinks.google}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Google
            </a>
          </div>
        </div>
      </section>

      {/* Sandbox Pricing Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Sandbox</h2>
          <a
            href={externalLinks.vercelSandbox}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-1"
          >
            Provider pricing
            <ExternalLinkIcon />
          </a>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Resource
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Active CPU
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.128/hour
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Provisioned Memory
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.0106/GB-hr
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">Creation</td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.60/1M
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">Network</td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.15/GB
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Concurrent Sandboxes
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 text-right">
                  1 per user
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Auto-pause when idle
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 text-right">
                  After 5 minutes
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/30 border-t border-neutral-200 dark:border-neutral-700 text-xs text-neutral-500">
            Live development environments with instant preview. Auto-pauses when
            idle to minimize costs.
          </div>
        </div>
      </section>

      {/* Database Pricing Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Database</h2>
          <a
            href={externalLinks.neon}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-1"
          >
            Provider pricing
            <ExternalLinkIcon />
          </a>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Resource
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">Compute</td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.106/CU-hour
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">Storage</td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.35/GB-month
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Point-in-Time Recovery (PITR)
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.20/GB-month
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Additional branches
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.002/branch-hr
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Network egress
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.10/GB
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Scale to zero when idle
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 text-right">
                  After 5 minutes
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/30 border-t border-neutral-200 dark:border-neutral-700 text-xs text-neutral-500">
            Serverless PostgreSQL with autoscaling. Auto-suspends after 5
            minutes of inactivity.
          </div>
        </div>
      </section>

      {/* Deployment Pricing Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Deployment</h2>
          <a
            href={externalLinks.vercel}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-1"
          >
            Provider pricing
            <ExternalLinkIcon />
          </a>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Resource
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {/* Fluid Compute */}
              <tr className="bg-neutral-50/50 dark:bg-neutral-800/20">
                <td
                  colSpan={2}
                  className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide"
                >
                  Fluid Compute
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Active CPU time
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.128/CPU-hour
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Provisioned memory
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.0106/GB-hour
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Function invocations
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.60/1M
                </td>
              </tr>
              {/* Edge & Data Transfer */}
              <tr className="bg-neutral-50/50 dark:bg-neutral-800/20">
                <td
                  colSpan={2}
                  className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide"
                >
                  Edge & Data Transfer
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Edge requests
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $1.00/1M
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Data transfer
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.40/GB
                </td>
              </tr>
              {/* ISR */}
              <tr className="bg-neutral-50/50 dark:bg-neutral-800/20">
                <td
                  colSpan={2}
                  className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide"
                >
                  ISR (Incremental Static Regeneration)
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">ISR reads</td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.50/1M
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  ISR writes
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $2.50/1M
                </td>
              </tr>
              {/* Build & Deploy */}
              <tr className="bg-neutral-50/50 dark:bg-neutral-800/20">
                <td
                  colSpan={2}
                  className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide"
                >
                  Build & Deploy
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Build minutes (Standard)
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.014/min
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Build minutes (Enhanced)
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.028/min
                </td>
              </tr>
              <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                <td className="px-4 py-3 text-sm text-foreground">
                  Build minutes (Turbo)
                </td>
                <td className="px-4 py-3 text-sm font-mono text-foreground text-right">
                  $0.126/min
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/30 border-t border-neutral-200 dark:border-neutral-700 text-xs text-neutral-500">
            Production hosting via Vercel. Automatic CI/CD, preview URLs, custom
            domains, and edge hosting included.
          </div>
        </div>
      </section>

      {/* Credit Top-Up Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Credit Top-ups
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              10% platform fee on top-ups. All services at exact provider cost
              with zero markup. Top up from $10 to $500 at any time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { amount: 10, credits: 9 },
              { amount: 25, credits: 22.5 },
              { amount: 50, credits: 45 },
              { amount: 100, credits: 90 },
            ].map((option) => (
              <div
                key={option.amount}
                className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-foreground mb-1">
                  ${option.amount}
                </div>
                <div className="text-sm text-neutral-500">
                  ${option.credits} credits
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href={`${appUrl}/settings/billing`}
              className="inline-flex px-6 py-2.5 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full font-medium transition-colors text-sm"
            >
              Top Up Credits
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                <span className="font-medium text-foreground">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-neutral-600 dark:text-neutral-400">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to start building?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
            Join thousands of developers building with AI. Get your first month
            signup bonus today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`${appUrl}/billing?plans`}
              className="px-8 py-3 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full font-medium transition-colors"
            >
              Start Building
            </Link>
            <a
              href={`mailto:${enterpriseEmail}`}
              className="px-8 py-3 bg-neutral-100 dark:bg-neutral-800 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full font-medium transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
