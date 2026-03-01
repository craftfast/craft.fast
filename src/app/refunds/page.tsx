import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cancellation & Refund Policy | Craft",
  description:
    "Craft's Cancellation and Refund Policy - Learn about our refund process and cancellation terms.",
};

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-2">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Last updated: March 1, 2026
            </p>

            <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6 mb-8">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-0">
                This Cancellation &amp; Refund Policy explains how cancellations
                and refunds work for Craft services operated by Nextcrafter Labs
                (OPC) Private Limited, a company incorporated under the laws of
                India. We are committed to fair, transparent policies that
                comply with applicable consumer protection laws. This policy
                forms part of our{" "}
                <Link
                  href="/terms"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>

            {/* ── 1. Pricing Model Overview ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. How Our Pricing Works
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                1.1 Subscription Plans
              </h3>
              <p className="mb-3">
                Craft offers tiered subscription plans (Hobby at $10/mo, Pro at
                $50/mo, Max at $250/mo, and custom Enterprise plans). Key
                details:
              </p>
              <ul className="space-y-2">
                <li>
                  100% of your subscription fee becomes usable USD-denominated
                  credits — no platform fee on subscriptions
                </li>
                <li>
                  Subscription credits reset each billing cycle and do not roll
                  over to the next period
                </li>
                <li>Annual billing is available at 12x the monthly rate</li>
                <li>
                  All provider services (AI models, E2B sandboxes, Neon
                  database, Vercel deployment, Cloudflare R2 storage, Resend
                  email) are billed from your credits at exact provider cost
                  with zero markup
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                1.2 Credit Top-ups
              </h3>
              <ul className="space-y-2">
                <li>
                  You can top up your balance from $10 to $5,000 at any time
                </li>
                <li>
                  A <strong>10% platform fee</strong> is applied to all top-ups,
                  covering payment processing, platform infrastructure, and
                  support
                </li>
                <li>
                  Top-up credits follow the same validity as your subscription
                  billing cycle — they expire and reset at each renewal (monthly
                  or annual)
                </li>
                <li>
                  All credits (subscription and top-up) are combined into a
                  unified balance and consumed together
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                1.3 Enterprise Plans
              </h3>
              <ul className="space-y-2">
                <li>Custom pricing and terms negotiated individually</li>
                <li>
                  Cancellation and refund terms as specified in the separate
                  Enterprise Agreement
                </li>
                <li>
                  Contact{" "}
                  <a
                    href="mailto:sales@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    sales@craft.fast
                  </a>{" "}
                  for details
                </li>
              </ul>
            </section>

            {/* ── 2. Cancellation ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Subscription Cancellation
              </h2>

              <h3 className="text-xl font-semibold mb-3">2.1 How to Cancel</h3>
              <p className="mb-3">
                You may cancel your subscription at any time through:
              </p>
              <ul className="space-y-2">
                <li>
                  Your Account dashboard (Settings → Billing → Cancel
                  Subscription)
                </li>
                <li>
                  Contacting our support team at{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2.2 What Happens When You Cancel
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Immediate effect:</strong> Auto-renewal is turned off
                </li>
                <li>
                  <strong>Continued access:</strong> You retain full access to
                  your plan features until the end of the current billing period
                </li>
                <li>
                  <strong>Unused credits:</strong> Any remaining credit balance
                  (subscription and top-up) for the current period is not
                  refunded and expires at the end of the billing cycle
                </li>
                <li>
                  <strong>Projects and data:</strong> Your projects and data
                  remain accessible — cancelling a subscription does not delete
                  your Account
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2.3 Plan Changes
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Upgrades:</strong> Take effect immediately. You are
                  charged the prorated difference for the remainder of the
                  current billing cycle.
                </li>
                <li>
                  <strong>Downgrades:</strong> Take effect at the start of the
                  next billing cycle. You retain your current plan benefits
                  until then.
                </li>
              </ul>
            </section>

            {/* ── 3. Account Closure ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Account Closure
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                3.1 How to Close Your Account
              </h3>
              <ul className="space-y-2">
                <li>
                  Use the account deletion feature in your Account settings
                </li>
                <li>
                  Or contact{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>{" "}
                  to request closure
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                3.2 Grace Period
              </h3>
              <ul className="space-y-2">
                <li>
                  Your data is retained for <strong>30 days</strong> after
                  Account closure (soft deletion)
                </li>
                <li>
                  You can reactivate your Account within 30 days by contacting
                  support — all data will be restored
                </li>
                <li>
                  After 30 days, all data is permanently and irreversibly
                  deleted
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                3.3 Remaining Balance
              </h3>
              <ul className="space-y-2">
                <li>
                  Remaining credit balance is forfeited upon permanent Account
                  deletion
                </li>
                <li>
                  You may request a refund of unused credits before Account
                  closure (see Section 4)
                </li>
                <li>
                  If you close your Account in good standing with unused
                  credits, contact support within the 30-day grace period to
                  discuss a potential refund
                </li>
              </ul>
            </section>

            {/* ── 4. Refund Policy ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Refund Policy</h2>

              <h3 className="text-xl font-semibold mb-3">
                4.1 General Refund Terms
              </h3>
              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-4 mb-4">
                <p className="text-sm mb-3">
                  Due to the nature of our digital services where credits are
                  consumed in real-time by third-party infrastructure providers:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Credits that have been consumed (used for AI, sandbox,
                    database, deployment, etc.) are{" "}
                    <strong>non-refundable</strong>
                  </li>
                  <li>
                    • The 10% platform fee on top-ups is{" "}
                    <strong>non-refundable</strong> in all cases
                  </li>
                  <li>
                    • Refunds are processed to the original payment method in
                    USD via Dodo Payments
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                4.2 Subscription Refunds
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Within 7 days of first subscription:</strong> If you
                  are a new subscriber and have consumed less than 20% of your
                  subscription credits, you may request a full refund of the
                  subscription fee
                </li>
                <li>
                  <strong>After 7 days or renewal:</strong> Subscription fees
                  are non-refundable. You may cancel to prevent future renewals,
                  and your access continues until the end of the billing period
                </li>
                <li>
                  <strong>Annual subscriptions:</strong> Refund eligibility is
                  limited to the first 7 days after purchase or renewal. No
                  partial/prorated refunds for the remaining annual term
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.3 Top-up Credit Refunds
              </h3>
              <p className="mb-3">
                Since top-up credits are added to your unified balance and
                follow the same billing cycle as your subscription:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Unused balance:</strong> If you have not consumed any
                  portion of a top-up, you may request a refund of the credit
                  amount (minus the 10% platform fee) within 30 days of purchase
                </li>
                <li>
                  <strong>Partially used balance:</strong> Refunds for partially
                  used credits are at our discretion and evaluated on a
                  case-by-case basis
                </li>
                <li>
                  <strong>After 30 days:</strong> Top-up amounts are
                  non-refundable regardless of usage
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.4 Situations Where Refunds Are Granted
              </h3>
              <p className="mb-3">
                We will provide refunds in the following scenarios regardless of
                the general terms above:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Duplicate charges:</strong> If you were charged
                  multiple times for the same transaction (reported within 48
                  hours)
                </li>
                <li>
                  <strong>Unauthorised charges:</strong> If a charge was made
                  without your authorisation, subject to identity verification
                  and fraud investigation
                </li>
                <li>
                  <strong>Service unavailability:</strong> If our core Services
                  were unavailable for more than 48 consecutive hours due to
                  issues within our control (not third-party provider outages)
                </li>
                <li>
                  <strong>Technical billing errors:</strong> If a top-up payment
                  was processed but credits were not added to your Account
                  (reported within 7 days)
                </li>
                <li>
                  <strong>Critical feature failure:</strong> If you can
                  demonstrate that critical platform features were
                  non-functional for more than 7 consecutive days and we were
                  unable to resolve the issue
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.5 Non-Refundable Items
              </h3>
              <ul className="space-y-2">
                <li>
                  Credits already consumed for AI, sandbox, database,
                  deployment, storage, or email services
                </li>
                <li>The 10% platform fee on any top-up</li>
                <li>Promotional or bonus credits</li>
                <li>
                  Subscription fees after the 7-day refund window or after any
                  renewal
                </li>
                <li>
                  Any charges where Account termination was due to violation of
                  our Terms of Service
                </li>
                <li>
                  Currency conversion fees or bank charges imposed by your
                  financial institution
                </li>
              </ul>
            </section>

            {/* ── 5. How to Request a Refund ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. How to Request a Refund
              </h2>

              <h3 className="text-xl font-semibold mb-3">5.1 Process</h3>
              <ol className="space-y-2">
                <li>
                  <strong>Step 1:</strong> Email{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>{" "}
                  with the subject line &quot;Refund Request&quot;
                </li>
                <li>
                  <strong>Step 2:</strong> Include your registered email
                  address, the transaction ID or payment reference, the date and
                  amount of the charge, and a description of why you are
                  requesting a refund
                </li>
                <li>
                  <strong>Step 3:</strong> Attach any relevant supporting
                  documentation (screenshots, error messages, bank statements)
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.2 Response Timeline
              </h3>
              <ul className="space-y-2">
                <li>
                  We will acknowledge your request within{" "}
                  <strong>2 business days</strong>
                </li>
                <li>
                  A decision will be communicated within{" "}
                  <strong>5-7 business days</strong> of receiving all required
                  information
                </li>
                <li>
                  Complex cases (e.g., fraud investigations) may take up to 15
                  business days
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.3 Refund Processing
              </h3>
              <ul className="space-y-2">
                <li>
                  Approved refunds are processed within{" "}
                  <strong>5-10 business days</strong> via Dodo Payments
                </li>
                <li>
                  The refund will be credited to your original payment method
                </li>
                <li>
                  Additional time (5-7 business days) may be required for your
                  bank or card issuer to process the credit
                </li>
                <li>All refunds are processed in USD</li>
                <li>
                  You will receive an email confirmation when the refund is
                  processed
                </li>
              </ul>
            </section>

            {/* ── 6. Billing Disputes ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Billing Disputes
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                6.1 Contact Us First
              </h3>
              <p className="mb-3">
                If you believe you have been incorrectly charged, please contact
                us at{" "}
                <a
                  href="mailto:support@craft.fast"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  support@craft.fast
                </a>{" "}
                <strong>before</strong> initiating a chargeback with your bank
                or card issuer. Most billing issues can be resolved quickly and
                amicably.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.2 Chargeback Policy
              </h3>
              <p className="mb-3">
                Filing a chargeback without first contacting us in good faith
                may result in:
              </p>
              <ul className="space-y-2">
                <li>Immediate suspension of your Account</li>
                <li>Loss of access to all projects and data</li>
                <li>Forfeiture of remaining credit balance</li>
                <li>
                  Recovery of chargeback fees, administrative costs, and
                  reasonable legal expenses where applicable
                </li>
              </ul>
              <p className="mt-3">
                We will cooperate fully with legitimate chargeback inquiries
                from payment processors and will provide transaction records as
                required.
              </p>
            </section>

            {/* ── 7. Auto-Renewal ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Automatic Renewal and Price Changes
              </h2>

              <h3 className="text-xl font-semibold mb-3">7.1 Auto-Renewal</h3>
              <ul className="space-y-2">
                <li>
                  All subscriptions (monthly and annual) automatically renew
                  unless cancelled before the renewal date
                </li>
                <li>
                  You will be charged on the same day of each billing cycle
                  using your payment method on file
                </li>
                <li>
                  A renewal confirmation email is sent at least 3 days before
                  each renewal
                </li>
                <li>
                  You can cancel auto-renewal at any time from your Account
                  dashboard
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                7.2 Price Changes
              </h3>
              <ul className="space-y-2">
                <li>
                  We reserve the right to adjust subscription pricing at any
                  time
                </li>
                <li>
                  Existing subscribers will receive at least{" "}
                  <strong>30 days&apos; advance notice</strong> via email before
                  any price increase takes effect
                </li>
                <li>
                  New pricing applies to the first renewal after the notice
                  period
                </li>
                <li>
                  If you do not agree with a price change, you may cancel your
                  subscription before the new price takes effect
                </li>
              </ul>
            </section>

            {/* ── 8. Enterprise ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Enterprise Agreements
              </h2>
              <p className="mb-3">
                Enterprise customers with separate agreements should refer to
                their specific contract for:
              </p>
              <ul className="space-y-2">
                <li>Custom cancellation terms and notice periods</li>
                <li>Prorated refund calculations</li>
                <li>Service Level Agreement (SLA) credit provisions</li>
                <li>Termination and wind-down procedures</li>
              </ul>
              <p className="mt-3">
                In the event of a conflict between this policy and an Enterprise
                Agreement, the Enterprise Agreement shall prevail.
              </p>
            </section>

            {/* ── 9. Consumer Rights ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Consumer Rights and Legal Compliance
              </h2>

              <h3 className="text-xl font-semibold mb-3">9.1 India</h3>
              <p className="mb-3">
                For customers in India, this policy complies with:
              </p>
              <ul className="space-y-2">
                <li>Consumer Protection Act, 2019</li>
                <li>Consumer Protection (E-Commerce) Rules, 2020</li>
                <li>Information Technology Act, 2000</li>
                <li>Digital Personal Data Protection Act, 2023 (DPDPA)</li>
                <li>
                  Applicable RBI guidelines for digital payments and refunds
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.2 European Union
              </h3>
              <p className="mb-3">
                EU customers may have the right to withdraw from a digital
                service contract within 14 days of purchase under the Consumer
                Rights Directive (2011/83/EU). However, by using Craft and
                consuming Credits, you acknowledge and consent to the immediate
                performance of the digital service and waive your right of
                withdrawal to the extent Credits have been consumed. Unused
                portions remain eligible under the standard refund terms in
                Section 4.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.3 United Kingdom
              </h3>
              <p className="mb-3">
                UK customers have rights under the Consumer Rights Act 2015 and
                the Consumer Contracts (Information, Cancellation and Additional
                Charges) Regulations 2013. The same 14-day withdrawal provisions
                apply as described for EU customers in Section 9.2.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.4 United States
              </h3>
              <p className="mb-3">
                US customers are protected by applicable federal and state
                consumer protection laws. State-specific rights may provide
                additional protections beyond this policy.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.5 Statutory Rights
              </h3>
              <p>
                Nothing in this policy is intended to limit, exclude, or modify
                any statutory consumer rights that cannot be waived or limited
                by agreement under applicable law. Where this policy conflicts
                with your mandatory statutory rights, your statutory rights
                shall prevail.
              </p>
            </section>

            {/* ── 10. Data Retention After Cancellation ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Data Retention After Cancellation
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>Subscription cancellation:</strong> Your Account and
                  all data remain accessible. Only your plan tier and credit
                  allocations change.
                </li>
                <li>
                  <strong>Account closure:</strong> Data retained for 30 days
                  (soft deletion). You can reactivate within this period.
                </li>
                <li>
                  <strong>After 30 days:</strong> All personal data and project
                  files are permanently deleted in accordance with our{" "}
                  <Link
                    href="/privacy"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <strong>Legal retention:</strong> Payment records are retained
                  for 7 years for tax and accounting compliance regardless of
                  Account status
                </li>
                <li>
                  <strong>Immediate deletion:</strong> You may request immediate
                  permanent deletion by contacting{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>
                  , waiving the 30-day reactivation period
                </li>
              </ul>
            </section>

            {/* ── 11. Changes ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. Changes to This Policy
              </h2>
              <p className="mb-3">
                We may update this policy from time to time. When we make
                changes:
              </p>
              <ul className="space-y-2">
                <li>
                  The &quot;Last updated&quot; date at the top will be revised
                </li>
                <li>
                  Active subscribers will be notified by email for material
                  changes at least 30 days in advance
                </li>
                <li>
                  New terms apply immediately to new users and after the notice
                  period for existing users
                </li>
              </ul>
              <p className="mt-3">
                Continued use of the Services after changes take effect
                constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* ── 12. Contact ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                12. Contact Information
              </h2>

              <p className="mb-3">
                For questions about cancellations, refunds, or billing:
              </p>

              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6">
                <p className="mb-2">
                  <strong>Nextcrafter Labs (OPC) Private Limited</strong>
                </p>
                <p className="mb-1">Bangalore, Karnataka, India</p>
                <p className="mb-3 text-sm">Operating: craft.fast</p>
                <p className="mb-1">
                  <strong>Billing Support:</strong>{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>
                </p>
                <p className="mb-1">
                  <strong>Sales:</strong>{" "}
                  <a
                    href="mailto:sales@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    sales@craft.fast
                  </a>
                </p>
                <p className="mb-0">
                  <strong>Response Time:</strong> Within 2 business days
                  (acknowledgement), 5-7 business days (resolution)
                </p>
              </div>
            </section>

            <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6 mt-8">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-0">
                This Cancellation &amp; Refund Policy should be read together
                with our{" "}
                <Link
                  href="/terms"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  Privacy Policy
                </Link>
                . In the event of any conflict, the Terms of Service shall
                prevail (except where overridden by mandatory applicable law).
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
