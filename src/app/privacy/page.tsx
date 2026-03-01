import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Craft",
  description:
    "Craft's Privacy Policy - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Last updated: March 1, 2026
            </p>

            <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6 mb-8">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-0">
                This Privacy Policy describes how Nextcrafter Labs (OPC) Private
                Limited, a company incorporated under the laws of India,
                operating Craft at craft.fast (&quot;Craft,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
                uses, shares, and protects your personal information when you
                use our AI-powered development platform and related services. We
                are committed to protecting your privacy and handling your data
                in a transparent, lawful, and secure manner.
              </p>
            </div>

            {/* ── 1. Information We Collect ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                1.1 Information You Provide Directly
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Account Information:</strong> Email address, username,
                  and password when you create an account, or profile data from
                  Google or GitHub when you authenticate via OAuth.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing name, billing
                  address, and payment method details. Payment card information
                  is processed and stored securely by our payment processor,
                  Dodo Payments — we do not store complete card numbers on our
                  servers.
                </li>
                <li>
                  <strong>Profile Information:</strong> Optional data such as
                  display name, profile picture, and preferences.
                </li>
                <li>
                  <strong>Communications:</strong> Information you provide when
                  contacting our support team, submitting feedback, or
                  participating in surveys.
                </li>
                <li>
                  <strong>Environment Variables:</strong> API keys and secrets
                  you configure for your projects, which are encrypted at rest
                  using AES-256 encryption.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                1.2 Information Generated Through Your Use
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Projects and Code:</strong> All code, files,
                  configurations, and assets you create, upload, or generate
                  through the platform.
                </li>
                <li>
                  <strong>AI Prompts and Conversations:</strong> Your
                  interactions with our AI assistant, including prompts,
                  instructions, and the AI-generated responses.
                </li>
                <li>
                  <strong>User Memory:</strong> Context and preferences stored
                  to provide better AI assistance across sessions.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                1.3 Information Collected Automatically
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Usage Data:</strong> Features used, projects created,
                  pages visited, actions taken, and time spent on the platform.
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type
                  and version, operating system, device identifiers, screen
                  resolution, and language preferences.
                </li>
                <li>
                  <strong>Log Data:</strong> Server logs, error reports,
                  performance data, and diagnostic information.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use
                  essential cookies for authentication and session management,
                  and analytics cookies to understand usage patterns. See
                  Section 7 for details.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                1.4 Information from Third-Party Integrations
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>GitHub:</strong> Repository metadata, file contents
                  (when you import a project), and profile information (when you
                  authenticate via GitHub).
                </li>
                <li>
                  <strong>Figma:</strong> Design file data accessed via
                  Figma&apos;s API when you use the design import feature.
                </li>
                <li>
                  <strong>Google:</strong> Basic profile information (name,
                  email, avatar) when you authenticate via Google OAuth.
                </li>
              </ul>
            </section>

            {/* ── 2. How We Use Your Information ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. How We Use Your Information
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                2.1 To Provide and Operate the Services
              </h3>
              <ul className="space-y-2">
                <li>
                  Create and manage your Account, authenticate sessions, and
                  enforce security
                </li>
                <li>
                  Execute AI code generation, sandbox environments, database
                  provisioning, deployments, and email delivery
                </li>
                <li>
                  Process payments, track credit balances, and manage
                  subscriptions via Dodo Payments
                </li>
                <li>
                  Facilitate integrations with GitHub, Figma, Vercel, and other
                  third-party services
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2.2 To Improve and Personalise
              </h3>
              <ul className="space-y-2">
                <li>
                  Analyse usage patterns and performance metrics to improve
                  platform reliability and features
                </li>
                <li>
                  Store AI conversation context (User Memory) to provide more
                  relevant and accurate assistance
                </li>
                <li>
                  Customise your experience based on your preferences and usage
                  history
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2.3 For AI Model Improvement
              </h3>
              <ul className="space-y-2">
                <li>
                  Your prompts and AI interactions may be used to improve AI
                  quality and platform features using privacy-preserving
                  techniques (e.g., aggregation, anonymisation)
                </li>
                <li>
                  We do not sell your prompts or code to third-party AI
                  providers for their model training
                </li>
                <li>
                  Enterprise customers may opt out of AI data usage entirely
                  under their Enterprise Agreement
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2.4 For Communication
              </h3>
              <ul className="space-y-2">
                <li>
                  Send transactional emails: account verification, password
                  resets, billing receipts, security alerts
                </li>
                <li>
                  Notify you of service updates, maintenance windows, policy
                  changes, and new features
                </li>
                <li>
                  Send marketing communications (with your consent; you may
                  opt-out at any time)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2.5 For Security and Legal Compliance
              </h3>
              <ul className="space-y-2">
                <li>
                  Detect, prevent, and respond to fraud, abuse, security
                  incidents, and technical issues
                </li>
                <li>Enforce our Terms of Service and Acceptable Use Policy</li>
                <li>
                  Comply with applicable legal obligations, regulatory
                  requirements, and lawful requests
                </li>
              </ul>
            </section>

            {/* ── 3. Legal Bases for Processing ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Legal Bases for Processing (GDPR/DPDPA)
              </h2>
              <p className="mb-3">
                Where applicable data protection law requires a legal basis, we
                process your personal data on the following grounds:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Contract Performance:</strong> Processing necessary to
                  provide the Services you have requested (account management,
                  code execution, billing).
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> Improving our platform,
                  preventing fraud, ensuring security, and analytics — balanced
                  against your privacy rights.
                </li>
                <li>
                  <strong>Consent:</strong> Marketing communications, optional
                  analytics, and AI training where consent is specifically
                  obtained.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Tax record keeping, fraud
                  prevention, and responding to lawful requests from
                  authorities.
                </li>
              </ul>
            </section>

            {/* ── 4. How We Share Your Information ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. How We Share Your Information
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We share data only in
                the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                4.1 Service Providers and Infrastructure Partners
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Dodo Payments:</strong> Payment processing, billing,
                  and tax compliance
                </li>
                <li>
                  <strong>E2B:</strong> Sandbox compute — your code is executed
                  in isolated E2B environments
                </li>
                <li>
                  <strong>Neon:</strong> Managed PostgreSQL databases for your
                  applications
                </li>
                <li>
                  <strong>Vercel:</strong> Platform hosting and production
                  deployments for your projects
                </li>
                <li>
                  <strong>Cloudflare R2:</strong> Object storage for project
                  files and backups
                </li>
                <li>
                  <strong>Resend:</strong> Transactional email delivery (OTP
                  codes, password resets, project emails)
                </li>
                <li>
                  <strong>Upstash:</strong> Redis for rate limiting, distributed
                  locks, and caching (no personal data stored)
                </li>
                <li>
                  <strong>
                    AI Model Providers (Anthropic, OpenAI, Google, xAI):
                  </strong>{" "}
                  Your prompts are sent to these providers for AI processing;
                  each provider has its own data handling policies
                </li>
                <li>
                  <strong>PostHog:</strong> Product analytics and LLM
                  performance tracing
                </li>
                <li>
                  <strong>Vercel Analytics &amp; Speed Insights:</strong>{" "}
                  Anonymised web performance and usage metrics
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.2 Legal Requirements
              </h3>
              <p>
                We may disclose your information when required by law,
                regulation, subpoena, court order, or other legal process, or
                when we believe disclosure is necessary to protect our rights,
                your safety, or the safety of others.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.3 Business Transfers
              </h3>
              <p>
                In the event of a merger, acquisition, reorganisation,
                bankruptcy, or sale of all or a portion of our assets, your
                information may be transferred to the successor entity. We will
                notify you of any such transfer and any choices you may have
                regarding your information.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.4 With Your Consent
              </h3>
              <p>
                We may share your information with third parties when you
                explicitly consent or direct us to do so (e.g., connecting a
                GitHub or Figma integration).
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.5 Public Content
              </h3>
              <p>
                If you publish a project or deploy an application, the
                associated code and content will be accessible to anyone with
                the deployment URL. You control what you publish.
              </p>
            </section>

            {/* ── 5. Data Retention ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="mb-3">
                We retain your data only for as long as necessary to fulfil the
                purposes described in this policy:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                      <th className="text-left py-2 pr-4 font-semibold">
                        Data Category
                      </th>
                      <th className="text-left py-2 font-semibold">
                        Retention Period
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    <tr>
                      <td className="py-2 pr-4">Account data</td>
                      <td className="py-2">
                        While your account is active + 30 days after deletion
                        request
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Projects and code</td>
                      <td className="py-2">
                        Until you delete them or close your account
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">AI conversations</td>
                      <td className="py-2">
                        Retained for service improvement; may be anonymised and
                        aggregated over time
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Payment records</td>
                      <td className="py-2">
                        7 years (tax/accounting compliance)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Security event logs</td>
                      <td className="py-2">12 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Analytics data</td>
                      <td className="py-2">
                        Aggregated and anonymised; retained indefinitely
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Server logs</td>
                      <td className="py-2">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                When you delete your Account, we initiate deletion of your
                personal data within 30 days. Some data may be retained longer
                where required by law, for legitimate business purposes (e.g.,
                fraud prevention), or where technically infeasible to delete
                immediately (e.g., data in backups that are overwritten on a
                rolling basis).
              </p>
            </section>

            {/* ── 6. Data Security ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="mb-3">
                We implement industry-standard technical and organisational
                measures to protect your information:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Encryption:</strong> TLS/SSL for data in transit;
                  AES-256 for sensitive data at rest (environment variables,
                  secrets)
                </li>
                <li>
                  <strong>Authentication:</strong> Secure password hashing,
                  optional TOTP two-factor authentication, OAuth 2.0 for
                  third-party login
                </li>
                <li>
                  <strong>Access Controls:</strong> Least-privilege principles,
                  role-based access, and regular access reviews
                </li>
                <li>
                  <strong>Infrastructure:</strong> Isolated sandbox
                  environments, network segmentation, and firewalled databases
                </li>
                <li>
                  <strong>Monitoring:</strong> Security event logging, anomaly
                  detection, and incident response procedures
                </li>
                <li>
                  <strong>Rate Limiting:</strong> Protection against brute-force
                  attacks and abuse
                </li>
              </ul>
              <p className="mt-3">
                While we strive to protect your data, no method of electronic
                transmission or storage is 100% secure. We cannot guarantee
                absolute security and encourage you to use strong, unique
                passwords and enable two-factor authentication.
              </p>
            </section>

            {/* ── 7. Cookies ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Cookies and Tracking Technologies
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                7.1 Types of Cookies We Use
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for
                  authentication, session management, and security. These cannot
                  be disabled.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used by Vercel Analytics,
                  Speed Insights, and PostHog to understand usage patterns and
                  improve performance. These can be controlled via your browser
                  settings.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                7.2 Managing Cookies
              </h3>
              <p>
                You can control cookies through your browser settings. Disabling
                essential cookies may prevent you from using the Services.
                Disabling analytics cookies will not affect your access to the
                platform.
              </p>
            </section>

            {/* ── 8. Your Rights ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Your Rights and Choices
              </h2>

              <h3 className="text-xl font-semibold mb-3">8.1 All Users</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Access:</strong> View and download your personal data,
                  projects, and code through your Account dashboard
                </li>
                <li>
                  <strong>Correction:</strong> Update your Account information
                  and profile at any time
                </li>
                <li>
                  <strong>Deletion:</strong> Delete individual projects or your
                  entire Account via settings, or contact{" "}
                  <a
                    href="mailto:privacy@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    privacy@craft.fast
                  </a>
                </li>
                <li>
                  <strong>Marketing Opt-Out:</strong> Unsubscribe from
                  promotional emails using the link in each message
                </li>
                <li>
                  <strong>Cookie Preferences:</strong> Control non-essential
                  cookies through your browser settings
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.2 Rights Under GDPR (EU/EEA Residents)
              </h3>
              <p className="mb-3">
                If you are located in the European Union or European Economic
                Area, you have the following additional rights:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Right of Access:</strong> Obtain confirmation of
                  whether we process your data and receive a copy
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of
                  inaccurate personal data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data (&quot;right to be forgotten&quot;)
                </li>
                <li>
                  <strong>Right to Restriction:</strong> Request restriction of
                  processing in certain circumstances
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data
                  in a structured, commonly used, machine-readable format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests, including profiling
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent
                  at any time where processing is based on consent
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> File a complaint
                  with your local data protection supervisory authority
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.3 Rights Under CCPA (California Residents)
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Right to Know:</strong> Request information about the
                  categories and specific pieces of personal information we
                  collect
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of personal
                  information we have collected
                </li>
                <li>
                  <strong>Right to Opt-Out:</strong> We do not sell personal
                  information as defined by the CCPA
                </li>
                <li>
                  <strong>Non-Discrimination:</strong> We will not discriminate
                  against you for exercising your privacy rights
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.4 Rights Under DPDPA (India Residents)
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Right to Information:</strong> Obtain a summary of
                  your personal data being processed and processing activities
                </li>
                <li>
                  <strong>Right to Correction and Erasure:</strong> Request
                  correction of inaccurate data or erasure of data no longer
                  necessary
                </li>
                <li>
                  <strong>Right to Grievance Redressal:</strong> You may raise
                  grievances with our Data Protection Officer at{" "}
                  <a
                    href="mailto:dpo@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    dpo@craft.fast
                  </a>
                </li>
                <li>
                  <strong>Right to Nominate:</strong> Nominate any other
                  individual to exercise your rights in case of death or
                  incapacity
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.5 Exercising Your Rights
              </h3>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:privacy@craft.fast"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  privacy@craft.fast
                </a>
                . We will respond within 30 days (or the timeframe required by
                applicable law). We may need to verify your identity before
                processing your request.
              </p>
            </section>

            {/* ── 9. Children's Privacy ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Craft is not directed to children under 13 years of age (or 16
                in the EU/EEA). We do not knowingly collect personal information
                from children below these age thresholds. If you are a parent or
                guardian and believe your child has provided us with personal
                information, please contact us at{" "}
                <a
                  href="mailto:privacy@craft.fast"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                >
                  privacy@craft.fast
                </a>
                . We will promptly investigate and delete any such information.
              </p>
            </section>

            {/* ── 10. International Data Transfers ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. International Data Transfers
              </h2>
              <p className="mb-3">
                Craft is operated from India and uses infrastructure providers
                located in various countries, including the United States and
                the European Union. Your information may be transferred to and
                processed in countries with different data protection laws than
                your country of residence.
              </p>
              <p>
                Where such transfers occur, we use appropriate safeguards to
                protect your data, including Standard Contractual Clauses (SCCs)
                approved by the European Commission, data processing agreements
                with our service providers, and compliance with applicable data
                transfer frameworks.
              </p>
            </section>

            {/* ── 11. AI-Specific Privacy ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. AI-Specific Privacy Considerations
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                11.1 How AI Processes Your Data
              </h3>
              <ul className="space-y-2">
                <li>
                  Your prompts are sent to third-party AI model providers
                  (Anthropic, OpenAI, Google, xAI) through our AI Gateway for
                  processing
                </li>
                <li>
                  Each AI provider processes your prompts according to their own
                  privacy policies and data handling agreements
                </li>
                <li>
                  We store your AI conversation history to provide continuity
                  within projects
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                11.2 AI Training and Improvement
              </h3>
              <ul className="space-y-2">
                <li>
                  We may use anonymised and aggregated interaction patterns to
                  improve platform features and AI quality
                </li>
                <li>
                  We do not use your code or project files to train third-party
                  AI models
                </li>
                <li>
                  Enterprise customers can fully opt out of any AI data usage
                  under their Enterprise Agreement
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                11.3 Recommendations
              </h3>
              <ul className="space-y-2">
                <li>
                  Do not include passwords, API keys, personal identification
                  numbers, or other sensitive credentials in your AI prompts
                </li>
                <li>Avoid sharing personal data of third parties in prompts</li>
                <li>
                  Review AI-generated code for any inadvertently included
                  sensitive information before deploying
                </li>
              </ul>
            </section>

            {/* ── 12. Third-Party Links ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                12. Third-Party Links and Services
              </h2>
              <p>
                Our platform may contain links to third-party websites and
                integrates with external services. We are not responsible for
                the privacy practices, content, or security of third-party
                services. We encourage you to review their privacy policies
                before providing them with your information.
              </p>
            </section>

            {/* ── 13. Changes ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                13. Changes to This Privacy Policy
              </h2>
              <p className="mb-3">
                We may update this Privacy Policy from time to time. When we
                make changes, we will:
              </p>
              <ul className="space-y-2">
                <li>
                  Update the &quot;Last updated&quot; date at the top of this
                  page
                </li>
                <li>
                  Notify you by email for material changes at least 30 days
                  before they take effect
                </li>
                <li>Post the revised policy on our website</li>
              </ul>
              <p className="mt-3">
                Your continued use of Craft after the effective date constitutes
                acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* ── 14. Contact ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>

              <p className="mb-3">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>

              <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-6">
                <p className="mb-2">
                  <strong>Nextcrafter Labs (OPC) Private Limited</strong>
                </p>
                <p className="mb-1">Bangalore, Karnataka, India</p>
                <p className="mb-3 text-sm">Operating: craft.fast</p>
                <p className="mb-1">
                  Privacy:{" "}
                  <a
                    href="mailto:privacy@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    privacy@craft.fast
                  </a>
                </p>
                <p className="mb-1">
                  Data Protection Officer:{" "}
                  <a
                    href="mailto:dpo@craft.fast"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    dpo@craft.fast
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
              </div>
            </section>

            {/* ── 15. Additional Resources ── */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                15. Additional Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refunds"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Cancellation &amp; Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.dodopayments.com/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Dodo Payments Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://e2b.dev/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    E2B Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://neon.tech/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Neon Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
                  >
                    Vercel Privacy Policy
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
