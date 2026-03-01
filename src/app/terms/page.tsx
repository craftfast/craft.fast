import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Craft",
  description:
    "Craft's Terms of Service - Read our terms and conditions for using the platform.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Last updated: March 1, 2026
            </p>

            <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6 mb-8">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-0">
                These Terms of Service (&quot;Terms&quot;) constitute a legally
                binding agreement between you and Nextcrafter Labs (OPC) Private
                Limited, a company incorporated under the laws of India
                (&quot;Craft,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), governing your access to and use of the Craft
                platform at craft.fast and all related services, applications,
                and APIs (collectively, the &quot;Services&quot;). By accessing
                or using our Services, you agree to be bound by these Terms. If
                you do not agree, you must not use the Services.
              </p>
            </div>

            {/* ── 1. Acceptance ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-3">
                By creating an account, accessing, or using Craft, you
                acknowledge that you have read, understood, and agree to:
              </p>
              <ul className="space-y-2">
                <li>
                  Be bound by these Terms, our{" "}
                  <Link
                    href="/privacy"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Privacy Policy
                  </Link>
                  , and our{" "}
                  <Link
                    href="/refunds"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Cancellation &amp; Refund Policy
                  </Link>
                  , each incorporated herein by reference
                </li>
                <li>Comply with all applicable laws, rules, and regulations</li>
                <li>
                  Be at least 18 years old, or at least 13 years old (16 in the
                  EU/EEA) with verifiable parental or guardian consent
                </li>
                <li>
                  Provide accurate, current, and complete information during
                  registration and keep it updated
                </li>
              </ul>
              <p className="mt-3">
                If you are entering into these Terms on behalf of an
                organisation, you represent and warrant that you have the
                authority to bind that organisation and all references to
                &quot;you&quot; shall include that organisation.
              </p>
            </section>

            {/* ── 2. Definitions ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
              <ul className="space-y-2">
                <li>
                  <strong>&quot;Account&quot;</strong> means your registered
                  user account on Craft.
                </li>
                <li>
                  <strong>&quot;Content&quot;</strong> means all code, files,
                  text, images, data, and other materials you upload, create, or
                  transmit through the Services.
                </li>
                <li>
                  <strong>&quot;Credits&quot;</strong> means the USD-denominated
                  balance used to pay for usage of AI models, sandbox compute,
                  database, deployment, email, and storage services on the
                  platform.
                </li>
                <li>
                  <strong>&quot;Platform Fee&quot;</strong> means the 10% fee
                  applied to credit top-up purchases (not applied to
                  subscription credits).
                </li>
                <li>
                  <strong>&quot;Sandbox&quot;</strong> means the isolated
                  cloud-based development environment powered by E2B where your
                  code is executed and previewed.
                </li>
                <li>
                  <strong>&quot;AI Output&quot;</strong> means any code, text,
                  or other content generated by AI models through the Services.
                </li>
              </ul>
            </section>

            {/* ── 3. Account Registration & Security ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Account Registration and Security
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                3.1 Account Creation
              </h3>
              <ul className="space-y-2">
                <li>
                  You must provide a valid email address and create a secure
                  password (minimum 12 characters), or authenticate via Google
                  or GitHub OAuth
                </li>
                <li>
                  Email verification via a one-time password is mandatory before
                  account activation
                </li>
                <li>
                  One individual or legal entity may not create or maintain
                  multiple accounts
                </li>
                <li>
                  Accounts are personal and non-transferable without our prior
                  written consent
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                3.2 Account Security
              </h3>
              <ul className="space-y-2">
                <li>
                  You are solely responsible for maintaining the confidentiality
                  of your credentials and for all activity under your Account
                </li>
                <li>
                  We strongly recommend enabling two-factor authentication
                  (TOTP)
                </li>
                <li>
                  You must notify us immediately at{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>{" "}
                  of any unauthorised access or security breach
                </li>
                <li>
                  We are not liable for losses arising from unauthorised use of
                  your Account where you have failed to safeguard your
                  credentials
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                3.3 Account Responsibility
              </h3>
              <p>
                You are responsible for all activity that occurs under your
                Account, including:
              </p>
              <ul className="space-y-2">
                <li>Content created, uploaded, or shared</li>
                <li>All usage charges and billing obligations</li>
                <li>Compliance with these Terms and applicable law</li>
                <li>Actions of collaborators you invite to your projects</li>
              </ul>
            </section>

            {/* ── 4. Services Description ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Description of Services
              </h2>
              <p className="mb-3">
                Craft is an AI-powered development platform for building,
                previewing, and deploying Next.js web applications. The Services
                include:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>AI Code Generation:</strong> Natural language to code
                  using large language models from Anthropic, OpenAI, Google,
                  xAI, and other providers
                </li>
                <li>
                  <strong>Cloud Sandboxes:</strong> Isolated development
                  environments powered by E2B for live code execution and
                  preview
                </li>
                <li>
                  <strong>Managed Database:</strong> Per-project PostgreSQL
                  databases powered by Neon
                </li>
                <li>
                  <strong>Deployment:</strong> Production hosting via Vercel for
                  Platforms
                </li>
                <li>
                  <strong>Storage:</strong> Project file storage on Cloudflare
                  R2 and per-project object storage
                </li>
                <li>
                  <strong>Email:</strong> Transactional email for your
                  applications via Resend
                </li>
                <li>
                  <strong>Integrations:</strong> GitHub, Figma, and other
                  third-party service connections
                </li>
              </ul>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue any
                feature of the Services at any time with reasonable notice. We
                will endeavour to provide at least 30 days&apos; notice for
                material changes that affect your use.
              </p>
            </section>

            {/* ── 5. Pricing and Billing ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Pricing and Billing
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                5.1 Subscription Plans
              </h3>
              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-4 mb-4">
                <p className="text-sm mb-3">
                  Craft offers tiered subscription plans (Hobby, Pro, Max, and
                  Enterprise). Each plan includes:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Credits equal to plan price</strong> — 100% of
                    your subscription fee becomes usable credits with zero
                    platform fee
                  </li>
                  <li>
                    • Project limits, concurrent sandbox limits, and AI model
                    tier access vary by plan
                  </li>
                  <li>
                    • Subscription credits reset each billing cycle and do not
                    roll over
                  </li>
                  <li>• Annual billing is available at 12x the monthly rate</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">5.2 Credit Top-ups</h3>
              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-4 mb-4">
                <ul className="space-y-1 text-sm">
                  <li>
                    • Top up your balance starting from $10 (minimum) up to
                    $5,000
                  </li>
                  <li>
                    • A <strong>10% platform fee</strong> is applied to all
                    top-ups, covering payment processing, platform
                    infrastructure, and support
                  </li>
                  <li>
                    • Top-up credits follow the same validity as your
                    subscription billing cycle — they expire and reset at each
                    renewal (monthly or annual)
                  </li>
                  <li>
                    • All credits (subscription and top-up) share a unified
                    balance and are consumed together
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                5.3 Usage-Based Pricing
              </h3>
              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-4 mb-4">
                <p className="font-semibold mb-2 text-sm">
                  All provider services are billed at exact cost with zero
                  markup:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>AI Models:</strong> Per-token pricing at
                    Anthropic, OpenAI, Google, and xAI published rates
                  </li>
                  <li>
                    • <strong>E2B Sandbox:</strong> Per-second compute billing
                    for live preview and code execution
                  </li>
                  <li>
                    • <strong>Neon Database:</strong> Per compute-unit-hour and
                    per-GB storage at Neon&apos;s published rates
                  </li>
                  <li>
                    • <strong>Vercel Deployment:</strong> Per-build and
                    per-deployment at Vercel&apos;s published rates
                  </li>
                  <li>
                    • <strong>Cloudflare R2 Storage:</strong> $0.015/GB/month
                    for project files
                  </li>
                  <li>
                    • <strong>Resend Email:</strong> Per-email at Resend&apos;s
                    published rates (100 free emails/month included)
                  </li>
                </ul>
                <p className="text-sm mt-3">
                  Current rates are available on our{" "}
                  <Link
                    href="/pricing"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Pricing page
                  </Link>
                  . Provider rates may change; we pass through changes without
                  additional markup.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                5.4 Payment Processing
              </h3>
              <ul className="space-y-2">
                <li>
                  All payments are processed securely through Dodo Payments in
                  United States Dollars (USD)
                </li>
                <li>
                  We accept credit cards, debit cards, and other payment methods
                  supported by Dodo Payments
                </li>
                <li>
                  Applicable taxes (GST, VAT, sales tax) are calculated and
                  collected automatically by Dodo Payments based on your billing
                  location
                </li>
                <li>
                  You authorise us to charge your selected payment method for
                  all fees incurred
                </li>
                <li>
                  Currency conversion fees imposed by your bank or card issuer
                  are your responsibility
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.5 Auto-Renewal
              </h3>
              <ul className="space-y-2">
                <li>
                  Subscriptions automatically renew at the end of each billing
                  cycle unless cancelled before the renewal date
                </li>
                <li>
                  You may cancel auto-renewal at any time from your Account
                  dashboard; access continues until the end of the current
                  billing period
                </li>
                <li>
                  We will provide at least 30 days&apos; advance notice of any
                  price increases; new pricing applies to the next renewal after
                  the notice period
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.6 Low Balance and Service Continuity
              </h3>
              <ul className="space-y-2">
                <li>
                  We will notify you when your credit balance falls below $5.00
                </li>
                <li>
                  Operations that consume credits may be paused when your
                  balance falls below $0.50
                </li>
                <li>
                  You may top up your balance at any time to resume full service
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.7 Refunds</h3>
              <p>
                Refunds are governed by our{" "}
                <Link
                  href="/refunds"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  Cancellation &amp; Refund Policy
                </Link>
                . Billing disputes must be raised within 30 days of the charge
                by contacting{" "}
                <a
                  href="mailto:support@craft.fast"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  support@craft.fast
                </a>
                .
              </p>
            </section>

            {/* ── 6. Credit Terms ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Credit Terms</h2>

              <h3 className="text-xl font-semibold mb-3">
                6.1 Nature of Credits
              </h3>
              <ul className="space-y-2">
                <li>
                  Credits are denominated in USD and represent a prepaid balance
                  for consuming Services
                </li>
                <li>
                  Credits are not legal tender, currency, or property of any
                  kind and have no cash value
                </li>
                <li>
                  Credits may not be transferred, sold, bartered, or assigned to
                  any other person or Account
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.2 Types of Credits
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Subscription Credits:</strong> Included with your
                  plan. Reset each billing cycle and do not roll over.
                </li>
                <li>
                  <strong>Top-up Credits:</strong> Purchased separately. Follow
                  the same validity as your subscription billing cycle — expire
                  and reset at each renewal. Subject to 10% platform fee.
                </li>
                <li>
                  <strong>Promotional Credits:</strong> Issued at our discretion
                  during promotions or as sign-up bonuses. Expire at the time
                  specified when issued, or one (1) year from issuance if not
                  specified.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.3 Unified Credit Balance
              </h3>
              <p>
                Subscription credits and top-up credits are combined into a
                single unified balance. All credits share the same validity
                period tied to your billing cycle and are consumed from the
                unified balance without distinction. Promotional credits, if
                any, are consumed last.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.4 Expiration and Forfeiture
              </h3>
              <ul className="space-y-2">
                <li>
                  Credits automatically expire and are forfeited if you close
                  your Account or if your Account is terminated
                </li>
                <li>
                  Expired credits cannot be recovered, refunded, or reinstated
                </li>
              </ul>
            </section>

            {/* ── 7. Acceptable Use ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Acceptable Use Policy
              </h2>

              <h3 className="text-xl font-semibold mb-3">7.1 Permitted Uses</h3>
              <p>You may use the Services to:</p>
              <ul className="space-y-2">
                <li>Build, test, and deploy web applications</li>
                <li>
                  Use AI assistance for code generation, debugging, and
                  development tasks
                </li>
                <li>Collaborate with team members on projects</li>
                <li>
                  Integrate with supported third-party services (GitHub, Figma,
                  Vercel)
                </li>
                <li>Export and deploy code to your own infrastructure</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                7.2 Prohibited Uses
              </h3>
              <p>You must NOT use the Services to:</p>
              <ul className="space-y-2">
                <li>
                  <strong>Illegal Activity:</strong> Violate any applicable law,
                  regulation, or third-party right
                </li>
                <li>
                  <strong>Malicious Software:</strong> Create, distribute, or
                  host malware, viruses, ransomware, or other harmful code
                </li>
                <li>
                  <strong>Unauthorised Access:</strong> Attempt to gain
                  unauthorised access to other users&apos; Accounts, data, or
                  systems
                </li>
                <li>
                  <strong>Abuse and Harassment:</strong> Harass, threaten,
                  defame, or discriminate against others
                </li>
                <li>
                  <strong>Spam:</strong> Send unsolicited commercial
                  communications or bulk messages
                </li>
                <li>
                  <strong>Scraping and Automation:</strong> Automate access to
                  extract data, content, or AI outputs without written
                  permission
                </li>
                <li>
                  <strong>Resource Abuse:</strong> Engage in cryptocurrency
                  mining, denial-of-service attacks, or other activities that
                  excessively consume resources
                </li>
                <li>
                  <strong>Reverse Engineering:</strong> Reverse engineer,
                  decompile, or attempt to extract the source code of the
                  platform
                </li>
                <li>
                  <strong>Circumvention:</strong> Bypass rate limits, security
                  measures, or usage restrictions
                </li>
                <li>
                  <strong>Impersonation:</strong> Misrepresent your identity or
                  affiliation with Craft or any other entity
                </li>
                <li>
                  <strong>Prohibited Content:</strong> Create or distribute
                  content that is illegal, fraudulent, hateful, discriminatory,
                  sexually exploitative, or that infringes intellectual property
                  rights
                </li>
              </ul>
              <p className="mt-3">
                We reserve the right to investigate violations and may suspend
                or terminate your Account without notice for material breaches.
              </p>
            </section>

            {/* ── 8. Intellectual Property ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-semibold mb-3">8.1 Your Content</h3>
              <ul className="space-y-2">
                <li>
                  You retain all ownership rights to Content you create, upload,
                  or import
                </li>
                <li>
                  You grant Craft a worldwide, non-exclusive, royalty-free
                  licence to host, store, reproduce, display, and transmit your
                  Content solely as necessary to provide and improve the
                  Services
                </li>
                <li>
                  You represent and warrant that you own or have the necessary
                  rights and licences to all Content you provide
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.2 AI-Generated Output
              </h3>
              <ul className="space-y-2">
                <li>
                  AI Output is provided to you without restriction on use — you
                  may use, modify, and distribute it freely
                </li>
                <li>
                  <strong>You are solely responsible</strong> for reviewing,
                  testing, and validating all AI Output before use in any
                  environment
                </li>
                <li>
                  AI Output may not be unique; substantially similar output may
                  be provided to other users
                </li>
                <li>
                  We make no representation or warranty regarding the accuracy,
                  completeness, security, originality, or fitness for purpose of
                  AI Output
                </li>
                <li>
                  AI Output may inadvertently include code patterns similar to
                  open-source software; you are responsible for licence
                  compliance
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.3 Craft&apos;s Intellectual Property
              </h3>
              <p>
                The Craft platform — including software, algorithms, user
                interfaces, documentation, logos, trademarks, and service marks
                — is owned by Nextcrafter Labs (OPC) Private Limited and
                protected by applicable intellectual property laws. You may not
                copy, modify, distribute, sell, or create derivative works
                without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">8.4 Feedback</h3>
              <p>
                Any suggestions, ideas, or feedback you voluntarily provide
                about the Services may be used by us without obligation or
                compensation to you.
              </p>
            </section>

            {/* ── 9. AI Services ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. AI Services and Limitations
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                9.1 AI-Assisted Development
              </h3>
              <ul className="space-y-2">
                <li>
                  Craft provides AI-powered code generation, editing, debugging,
                  and assistance using third-party large language models
                </li>
                <li>
                  AI output is probabilistic and may contain errors, bugs,
                  security vulnerabilities, or suboptimal patterns
                </li>
                <li>
                  You must exercise independent professional judgment when using
                  AI Output in production environments
                </li>
                <li>
                  We are not liable for any loss, damage, or liability arising
                  from your reliance on AI Output
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.2 AI Model Access
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Hobby:</strong> Access to Lite-tier models
                </li>
                <li>
                  <strong>Pro and Max:</strong> Access to Lite and Premium-tier
                  models
                </li>
                <li>
                  <strong>Enterprise:</strong> All models plus bring-your-own
                  API keys and private model routing
                </li>
                <li>
                  Available models and pricing are managed dynamically and
                  displayed on the{" "}
                  <Link
                    href="/pricing"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Pricing page
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.3 Fair Use and Rate Limits
              </h3>
              <ul className="space-y-2">
                <li>
                  We reserve the right to implement and adjust rate limits to
                  maintain service quality for all users
                </li>
                <li>
                  Excessive or abusive usage may result in temporary throttling
                  or Account review
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.4 AI Data Usage
              </h3>
              <ul className="space-y-2">
                <li>
                  Your prompts and interactions may be used to improve platform
                  features and AI quality using privacy-preserving techniques
                </li>
                <li>
                  Enterprise customers may opt out of AI data usage entirely
                  under their Enterprise Agreement
                </li>
                <li>
                  Do not include sensitive personal data, credentials, or
                  confidential information in prompts
                </li>
                <li>
                  For details on how AI data is handled, see our{" "}
                  <Link
                    href="/privacy"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </section>

            {/* ── 10. Infrastructure & Third-Party Services ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Infrastructure and Third-Party Services
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                10.1 Infrastructure Providers
              </h3>
              <p className="mb-3">
                Craft delivers Services through the following third-party
                infrastructure providers, billed at their exact published rates
                with zero markup:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>E2B:</strong> Cloud sandbox environments for code
                  execution and live preview
                </li>
                <li>
                  <strong>Neon:</strong> Managed PostgreSQL databases for your
                  applications
                </li>
                <li>
                  <strong>Vercel:</strong> Production deployment and hosting
                </li>
                <li>
                  <strong>Cloudflare R2:</strong> Object storage for project
                  files and backups
                </li>
                <li>
                  <strong>Resend:</strong> Transactional email delivery for your
                  applications
                </li>
                <li>
                  <strong>Anthropic, OpenAI, Google, xAI:</strong> AI model
                  providers for code generation
                </li>
                <li>
                  <strong>Dodo Payments:</strong> Payment processing, billing,
                  and tax compliance
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                10.2 Third-Party Integrations
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>GitHub:</strong> Import existing projects, push code,
                  and manage repositories
                </li>
                <li>
                  <strong>Figma:</strong> Import designs and convert them to
                  code using AI
                </li>
              </ul>
              <p className="mt-3">
                When you use integrations, you are additionally subject to each
                provider&apos;s terms of service and privacy policy. We are not
                responsible for the availability, performance, or security of
                third-party services. You may revoke integration access at any
                time.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                10.3 Environment Variables and Secrets
              </h3>
              <ul className="space-y-2">
                <li>
                  You can store environment variables and API keys via project
                  settings
                </li>
                <li>
                  Secret values are encrypted at rest using AES-256 encryption
                  and are never displayed after creation
                </li>
                <li>
                  You are solely responsible for the security and rotation of
                  your API keys and secrets
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                10.4 Data Backups
              </h3>
              <ul className="space-y-2">
                <li>
                  Craft automatically backs up project files to Cloudflare R2
                </li>
                <li>
                  You are responsible for independently backing up your
                  application data and database content
                </li>
                <li>
                  We do not guarantee data recovery in the event of data loss
                </li>
              </ul>
            </section>

            {/* ── 11. Service Availability ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. Service Availability and Support
              </h2>

              <h3 className="text-xl font-semibold mb-3">11.1 Availability</h3>
              <ul className="space-y-2">
                <li>
                  We target 99.9% uptime but do not guarantee uninterrupted or
                  error-free service
                </li>
                <li>
                  Scheduled maintenance will be announced in advance when
                  practicable
                </li>
                <li>
                  Service availability depends on third-party providers (E2B,
                  Neon, Vercel, AI model providers) whose uptime is beyond our
                  control
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">11.2 Support</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Hobby:</strong> Community support via documentation
                  and Discord
                </li>
                <li>
                  <strong>Pro and Max:</strong> Priority email support
                </li>
                <li>
                  <strong>Enterprise:</strong> Dedicated account manager,
                  priority support with SLA guarantees
                </li>
              </ul>
            </section>

            {/* ── 12. Disclaimers ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Disclaimers</h2>

              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6">
                <p className="font-semibold mb-3 uppercase">
                  Services provided &quot;as is&quot; and &quot;as
                  available&quot;
                </p>
                <p className="text-sm mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CRAFT
                  EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER
                  EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING
                  FROM COURSE OF DEALING OR USAGE OF TRADE.
                </p>
                <p className="text-sm mb-3">
                  WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT:
                </p>
                <ul className="text-sm space-y-1">
                  <li>
                    • The Services will be uninterrupted, timely, secure, or
                    error-free
                  </li>
                  <li>
                    • AI Output will be accurate, complete, reliable, current,
                    or free from bias
                  </li>
                  <li>• Defects or errors will be corrected</li>
                  <li>
                    • The Services will meet your specific requirements or
                    expectations
                  </li>
                  <li>• Data will be backed up, preserved, or recoverable</li>
                  <li>
                    • Third-party services integrated with the platform will
                    perform as expected
                  </li>
                </ul>
                <p className="text-sm mt-4">
                  You use the Services at your own risk. You are solely
                  responsible for any damage to your systems or loss of data
                  resulting from use of the Services.
                </p>
              </div>
            </section>

            {/* ── 13. Limitation of Liability ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                13. Limitation of Liability
              </h2>

              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6">
                <p className="text-sm mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                </p>
                <ul className="text-sm space-y-2">
                  <li>
                    <strong>(a)</strong> CRAFT, ITS DIRECTORS, OFFICERS,
                    EMPLOYEES, AFFILIATES, AND AGENTS SHALL NOT BE LIABLE FOR
                    ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE,
                    OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES
                    FOR LOSS OF PROFITS, REVENUE, GOODWILL, DATA, BUSINESS
                    OPPORTUNITIES, OR ANTICIPATED SAVINGS, REGARDLESS OF THE
                    THEORY OF LIABILITY AND EVEN IF ADVISED OF THE POSSIBILITY
                    OF SUCH DAMAGES.
                  </li>
                  <li>
                    <strong>(b)</strong> OUR TOTAL AGGREGATE LIABILITY FOR ALL
                    CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE
                    SERVICES SHALL NOT EXCEED THE GREATER OF: (i) THE TOTAL
                    AMOUNTS YOU PAID TO CRAFT IN THE TWELVE (12) MONTHS
                    IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR
                    (ii) ONE HUNDRED UNITED STATES DOLLARS (US$100).
                  </li>
                  <li>
                    <strong>(c)</strong> THIS LIMITATION APPLIES TO ALL CAUSES
                    OF ACTION IN THE AGGREGATE, INCLUDING WITHOUT LIMITATION
                    BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT
                    LIABILITY, AND ANY OTHER LEGAL THEORY.
                  </li>
                </ul>
                <p className="text-sm mt-4">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                  CERTAIN DAMAGES. IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE
                  LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW. NOTHING IN
                  THESE TERMS EXCLUDES LIABILITY FOR FRAUD, DEATH, OR PERSONAL
                  INJURY CAUSED BY NEGLIGENCE, OR ANY OTHER LIABILITY THAT
                  CANNOT BE EXCLUDED BY LAW.
                </p>
              </div>
            </section>

            {/* ── 14. Indemnification ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                14. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Craft, its
                parent company, affiliates, officers, directors, employees, and
                agents from and against any and all claims, damages, losses,
                liabilities, costs, and expenses (including reasonable legal
                fees) arising out of or related to:
              </p>
              <ul className="space-y-2">
                <li>Your use of the Services</li>
                <li>
                  Your Content or projects, including AI Output you deploy
                </li>
                <li>Your breach of these Terms or any applicable law</li>
                <li>
                  Your infringement of any intellectual property or other rights
                  of any third party
                </li>
                <li>
                  Applications you build, deploy, or distribute using the
                  Services
                </li>
              </ul>
            </section>

            {/* ── 15. Termination ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Termination</h2>

              <h3 className="text-xl font-semibold mb-3">
                15.1 Termination by You
              </h3>
              <p>You may terminate your Account at any time by:</p>
              <ul className="space-y-2">
                <li>Using the account deletion feature in your settings</li>
                <li>
                  Contacting{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                If you have an active subscription, cancellation takes effect at
                the end of the current billing period. You retain access until
                then.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                15.2 Termination by Us
              </h3>
              <p>We may suspend or terminate your Account if:</p>
              <ul className="space-y-2">
                <li>You materially breach these Terms or our policies</li>
                <li>
                  Your Account is inactive for twelve (12) or more consecutive
                  months (with prior notice)
                </li>
                <li>
                  Payment repeatedly fails or is subject to chargeback disputes
                </li>
                <li>Required by law, regulation, or legal process</li>
                <li>
                  We discontinue the Services (with at least 30 days&apos;
                  notice)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                15.3 Effects of Termination
              </h3>
              <ul className="space-y-2">
                <li>
                  Your access to the Services will cease immediately (or at the
                  end of the billing period for voluntary cancellation)
                </li>
                <li>
                  Your data is retained for thirty (30) days to allow
                  reactivation, after which it may be permanently deleted
                </li>
                <li>
                  Remaining Credits are forfeited upon Account deletion (subject
                  to our{" "}
                  <Link
                    href="/refunds"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Refund Policy
                  </Link>
                  )
                </li>
                <li>
                  You remain liable for all charges incurred before termination
                </li>
                <li>
                  Sections that by their nature should survive (including
                  Intellectual Property, Disclaimers, Limitation of Liability,
                  Indemnification, and Governing Law) shall survive termination
                </li>
              </ul>
            </section>

            {/* ── 16. Dispute Resolution ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                16. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                16.1 Informal Resolution
              </h3>
              <p>
                Before initiating any formal proceedings, you agree to contact
                us at{" "}
                <a
                  href="mailto:legal@craft.fast"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  legal@craft.fast
                </a>{" "}
                and attempt to resolve the dispute informally for at least
                thirty (30) days.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                16.2 Arbitration
              </h3>
              <p>
                Any dispute, controversy, or claim arising out of or relating to
                these Terms that cannot be resolved informally shall be referred
                to and finally resolved by arbitration administered by a sole
                arbitrator in accordance with the Arbitration and Conciliation
                Act, 1996 (India). The seat and venue of arbitration shall be
                Bangalore, India. The language of arbitration shall be English.
                The arbitral award shall be final and binding.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                16.3 Class Action Waiver
              </h3>
              <p>
                To the fullest extent permitted by applicable law, you agree to
                bring claims only in your individual capacity and not as a
                plaintiff or class member in any purported class, consolidated,
                or representative proceeding.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                16.4 Exceptions
              </h3>
              <p>
                Nothing in this section prevents either party from seeking
                injunctive or other equitable relief in a court of competent
                jurisdiction for matters relating to intellectual property
                infringement, data breaches, or violations of the Acceptable Use
                Policy.
              </p>
            </section>

            {/* ── 17. Governing Law ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                17. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to its conflict of laws
                principles. Subject to Section 16 (Dispute Resolution), the
                courts in Bangalore, Karnataka, India shall have exclusive
                jurisdiction over any disputes arising out of or relating to
                these Terms.
              </p>
            </section>

            {/* ── 18. Changes to Terms ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                18. Changes to Terms
              </h2>
              <p className="mb-3">
                We may modify these Terms at any time. We will:
              </p>
              <ul className="space-y-2">
                <li>
                  Update the &quot;Last updated&quot; date at the top of this
                  page
                </li>
                <li>
                  Notify you by email at least thirty (30) days before material
                  changes take effect
                </li>
                <li>Post the revised Terms on our website</li>
              </ul>
              <p className="mt-3">
                Your continued use of the Services after the effective date of
                any changes constitutes acceptance of the revised Terms. If you
                disagree with any changes, you must stop using the Services and
                terminate your Account.
              </p>
            </section>

            {/* ── 19. General Provisions ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                19. General Provisions
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                19.1 Entire Agreement
              </h3>
              <p>
                These Terms, together with our Privacy Policy, Cancellation
                &amp; Refund Policy, and any Enterprise Agreement (if
                applicable), constitute the entire agreement between you and
                Craft regarding the Services and supersede all prior agreements.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                19.2 Severability
              </h3>
              <p>
                If any provision of these Terms is held to be invalid, illegal,
                or unenforceable, the remaining provisions shall continue in
                full force and effect. The invalid provision shall be modified
                to the minimum extent necessary to make it valid and
                enforceable.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                19.3 No Waiver
              </h3>
              <p>
                Our failure or delay in exercising any right or remedy under
                these Terms shall not constitute a waiver of that right or
                remedy. No waiver shall be effective unless made in writing.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                19.4 Assignment
              </h3>
              <p>
                You may not assign or transfer these Terms or any rights or
                obligations hereunder without our prior written consent. We may
                assign these Terms without restriction, including in connection
                with a merger, acquisition, or sale of all or substantially all
                of our assets.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                19.5 Force Majeure
              </h3>
              <p>
                Neither party shall be liable for any failure or delay in
                performance caused by circumstances beyond its reasonable
                control, including natural disasters, acts of government, war,
                terrorism, pandemics, labour disputes, internet or
                telecommunications failures, or third-party service outages.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">19.6 Notices</h3>
              <p>
                Notices to you may be sent to the email address associated with
                your Account. Notices to us must be sent to{" "}
                <a
                  href="mailto:legal@craft.fast"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  legal@craft.fast
                </a>
                . Notices are deemed received when delivered to the email
                address.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                19.7 Third-Party Rights
              </h3>
              <p>
                These Terms do not confer any rights on any third party unless
                expressly stated. No third party may enforce any provision of
                these Terms.
              </p>
            </section>

            {/* ── 20. Contact ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                20. Contact Information
              </h2>

              <p className="mb-3">
                For questions, concerns, or notices regarding these Terms:
              </p>

              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6">
                <p className="mb-2">
                  <strong>Nextcrafter Labs (OPC) Private Limited</strong>
                </p>
                <p className="mb-1">Bangalore, Karnataka, India</p>
                <p className="mb-3 text-sm">Operating: craft.fast</p>
                <p className="mb-1">
                  Legal:{" "}
                  <a
                    href="mailto:legal@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    legal@craft.fast
                  </a>
                </p>
                <p className="mb-1">
                  Support:{" "}
                  <a
                    href="mailto:support@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    support@craft.fast
                  </a>
                </p>
                <p className="mb-1">
                  General:{" "}
                  <a
                    href="mailto:hello@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    hello@craft.fast
                  </a>
                </p>
              </div>
            </section>

            <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6 mt-8">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-0">
                By using Craft, you acknowledge that you have read, understood,
                and agree to be bound by these Terms of Service, our{" "}
                <Link
                  href="/privacy"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  Privacy Policy
                </Link>
                , and our{" "}
                <Link
                  href="/refunds"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  Cancellation &amp; Refund Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
