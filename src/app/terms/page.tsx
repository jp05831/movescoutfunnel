import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-5 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <Link href="/guarantee" className="text-2xl font-bold">
            <span className="text-blue-600">Move</span><span className="text-gray-900">Scout</span>
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-900 tracking-wide">
            <span className="font-bold">DIGITAL MARKETING</span> FOR MOVING COMPANIES
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">Effective Date: October 28, 2025</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Welcome to MoveScout LLC (&quot;MoveScout,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of the MoveScout platform, website, dashboard, and related tools and services (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Company Information</h2>
          <p>
            <strong>MoveScout LLC</strong><br />
            Pennsylvania, USA<br />
            Contact: info@movescout.net
          </p>
          <p>
            All references to &quot;Client,&quot; &quot;User,&quot; or &quot;you&quot; refer to the business or individual accessing and using the Service.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Service Description</h2>
          <p>
            MoveScout provides a platform and related services designed to help Clients identify and connect with potential homeowner opportunities and individuals who may require moving services.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>MoveScout uses proprietary marketing, outreach, advertising, and data-driven methods to generate homeowner opportunities. These methods may include, but are not limited to, physical mail, digital marketing, advertising campaigns, messaging channels, and other lawful marketing and outreach methods.</li>
            <li>Clients acknowledge and agree that MoveScout&apos;s lead generation methods, systems, and processes are proprietary and confidential.</li>
            <li>MoveScout does not guarantee or disclose the specific outreach method used to generate any individual homeowner opportunity.</li>
            <li>MoveScout does not guarantee that homeowner opportunities will originate from any specific communication channel. Opportunities may result from various marketing, advertising, outreach, or lead-generation activities conducted by MoveScout.</li>
            <li>MoveScout reserves the right to modify, improve, or change its lead generation methods, platform features, pricing, or service structure at any time.</li>
            <li>MoveScout is a subscription-based service that includes an initial setup fee and recurring subscription charges. Prices and packages may change at any time at our discretion.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration</h2>
          <p>
            To use the Service, you must provide accurate information during account creation, including your name, business name, email, and payment details. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Payment and Billing</h2>
          <p>
            Subscription fees are billed on a recurring basis according to your selected plan. Fees are subject to change with notice. Payment is due at the start of each billing period. By maintaining an active account, you authorize MoveScout to charge your designated payment method automatically for renewal periods until you cancel in writing.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Refund Policy and 30-Day Guarantee</h2>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">A. 30-Day Lead-Opportunity Guarantee</h3>
          <p>
            MoveScout guarantees delivery of at least one qualified homeowner opportunity within thirty (30) days of account activation.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The 30-Day Guarantee applies solely to the outreach execution portion of the monthly subscription fee.</li>
            <li>The $300 platform and system access fee is non-refundable.</li>
            <li>A &quot;qualified homeowner opportunity&quot; is defined as a third-party homeowner who has demonstrated intent to move and provides a genuine opportunity for the client to communicate, quote, or attempt to schedule a moving service.</li>
            <li>Once a qualified homeowner opportunity has been delivered, the guarantee is considered fulfilled.</li>
          </ul>
          <p className="mt-4">
            If you do not receive any homeowner opportunities during that period, you may request a refund of the outreach execution fee.
          </p>
          <p className="mt-4">To qualify for this guarantee, your account must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remain active and fully paid for the entire 30-day period; and</li>
            <li>Be used to access the platform and reasonably attempt to engage with any opportunities provided.</li>
          </ul>
          <p className="mt-4">Refunds will NOT be granted if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>MoveScout has provided any homeowner opportunities within the 30-day period (once an opportunity is delivered, the guarantee is fulfilled);</li>
            <li>You choose not to contact or follow up with opportunities provided;</li>
            <li>You successfully book or close a moving job from any opportunity delivered by MoveScout; or</li>
            <li>Your account is suspended or terminated for violating these Terms.</li>
          </ul>
          <p className="mt-4">
            To claim your refund, you must email info@movescout.net within ten (10) days after the 30-day period has ended.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. User Responsibilities and Compliance</h2>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">A. TCPA Compliance</h3>
          <p>
            MoveScout&apos;s system requires manual human action to send each text message. The Service does not automatically send or queue outbound messages without human initiation.
          </p>
          <p className="mt-4">Clients are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensuring their use of the Service complies with all federal, state, and local laws, including the TCPA and CAN-SPAM Act.</li>
            <li>Using only compliant language in custom messages or templates.</li>
            <li>Including opt-out language when applicable if using automation outside of MoveScout&apos;s dashboard.</li>
          </ul>
          <p className="mt-4">
            MoveScout provides TCPA-safe default prompts and educational materials but is not responsible for the legality of a Client&apos;s custom content.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">B. Prohibited Use</h3>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Service for spam, harassment, or misleading messages.</li>
            <li>Attempt to scrape, export, or reverse-engineer homeowner or platform data.</li>
            <li>Circumvent the manual &quot;click-to-send&quot; process or automate transmissions.</li>
            <li>Interfere with or disrupt the Service, Twilio API, or associated systems.</li>
          </ul>
          <p className="mt-4">
            Violation of these restrictions may result in immediate termination without refund.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Data and Privacy</h2>
          <p>
            All data collection and usage are governed by the <Link href="/privacy" className="text-blue-600 hover:underline">MoveScout Privacy Policy</Link>, which is incorporated by reference into these Terms. By using the Service, you acknowledge and agree to the data practices outlined in the Privacy Policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
          <p>MoveScout reserves the right to suspend or terminate any account, with or without notice, if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A Client violates these Terms or applicable laws;</li>
            <li>Misuses the Service for spam or unlawful messaging; or</li>
            <li>Fails to maintain payment.</li>
          </ul>
          <p className="mt-4">
            Termination due to violation of these Terms will not result in a refund.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Service Availability and Limitations</h2>
          <p>
            MoveScout strives to maintain uninterrupted access to its dashboard and services. However, we cannot guarantee continuous uptime or performance due to factors outside our control, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Internet or hosting outages,</li>
            <li>Third-party service failures (including Twilio or data providers),</li>
            <li>Technical maintenance or upgrades, or</li>
            <li>Force majeure events.</li>
          </ul>
          <p className="mt-4">
            MoveScout shall not be held liable for losses resulting from service interruptions or API downtime.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Intellectual Property Rights</h2>
          <p>
            The MoveScout platform, software, design, dashboard interface, trademarks, and all related materials are the exclusive property of MoveScout LLC and are protected by copyright, trademark, and intellectual-property laws.
          </p>
          <p className="mt-4">
            Clients are granted a limited, non-exclusive, non-transferable license to use the Service for their internal business purposes only. This license does not allow resale, redistribution, reverse engineering, or modification of MoveScout&apos;s proprietary technology.
          </p>
          <p className="mt-4">
            All rights not expressly granted remain with MoveScout LLC.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>MoveScout shall not be liable for any indirect, incidental, special, or consequential damages, including lost profits, business interruption, or loss of data.</li>
            <li>MoveScout&apos;s total liability for any claim arising out of or relating to these Terms shall not exceed the amount paid by the Client during the 90 days preceding the event giving rise to the claim.</li>
            <li>The Service is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Indemnification</h2>
          <p>
            Clients agree to indemnify, defend, and hold harmless MoveScout LLC, its affiliates, employees, and contractors from any claims, damages, liabilities, or expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violations of these Terms;</li>
            <li>Breach of applicable laws (including TCPA or data-privacy laws); or</li>
            <li>Misuse of the Service or its content.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Arbitration and Dispute Resolution</h2>
          <p>
            Any dispute or claim arising from these Terms or the Service shall be resolved through binding arbitration administered by the American Arbitration Association (&quot;AAA&quot;) under its Commercial Arbitration Rules.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Arbitration will take place in Pennsylvania.</li>
            <li>The arbitrator&apos;s decision will be final and binding, and judgment may be entered in any court of competent jurisdiction.</li>
            <li>You agree that disputes will be handled individually and not as part of any class action.</li>
          </ul>
          <p className="mt-4">
            If arbitration is found unenforceable, both parties agree to the exclusive jurisdiction of the courts of Pennsylvania.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-law principles.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">15. Modifications</h2>
          <p>
            MoveScout may update or modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of the Service constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">16. Contact Information</h2>
          <p>For questions or legal notices regarding these Terms:</p>
          <p className="mt-2">
            <strong>Email:</strong> info@movescout.net<br />
            <strong>MoveScout LLC</strong><br />
            Pennsylvania, USA
          </p>

          <p className="mt-8 text-gray-500 text-sm">
            MoveScout LLC © 2025. All rights reserved.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="text-blue-600">Move</span><span className="text-gray-900">Scout</span>
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-900">
              <span className="font-bold">DIGITAL MARKETING</span> FOR MOVING COMPANIES
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              Copyright 2025 MoveScout.co - All Rights Reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-xs text-gray-400 mt-1">
              <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
