import Link from 'next/link';

export default function PrivacyPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Effective Date: October 28, 2025</p>

        <div className="prose prose-gray max-w-none">
          <p>
            MoveScout LLC (&quot;MoveScout,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data we handle when you use our platform, website, or related services (collectively, the &quot;Service&quot;).
          </p>
          <p>
            By using MoveScout, you agree to the practices described in this Privacy Policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>&quot;Client&quot;</strong> refers to any business or individual who signs up for the MoveScout dashboard to send messages through our platform.</li>
            <li><strong>&quot;Homeowner&quot;</strong> refers to the property owner whose publicly available listing information may be accessed by the Client.</li>
            <li><strong>&quot;Service&quot;</strong> refers to the MoveScout website, dashboard, and related tools or applications.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect and process the following types of information:</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">A. From Clients (Users of the Dashboard)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, company name, email address, and phone number</li>
            <li>Account login credentials (if applicable)</li>
            <li>Usage data (e.g., message send logs, timestamps, reply rates)</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">B. From Homeowner Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, phone number, and property listing details (address, price, or status) obtained from publicly available real-estate data sources</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">C. Automatically Collected Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information, browser type, and IP address</li>
            <li>Interaction data from the dashboard (e.g., when a message is sent)</li>
            <li>Cookies and analytics tracking (described in Section 6 – Cookies and Analytics below)</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Collect Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Information you provide during client signup or communication with our team</li>
            <li>Data imported into the MoveScout dashboard (e.g., homeowner listings from third-party data sources)</li>
            <li>Automatically via cookies or analytics tools when using our site (once enabled)</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Information</h2>
          <p>We collect and process data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve the MoveScout Service</li>
            <li>Allow clients to send messages to potential customers in compliance with applicable laws</li>
            <li>Track message performance and dashboard analytics</li>
            <li>Respond to client inquiries and provide customer support</li>
            <li>Prevent abuse and maintain platform security</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4 font-semibold">
            We do not sell or rent personal information to third parties.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Data Storage and Security</h2>
          <p>
            Client and homeowner information is stored securely on MoveScout&apos;s internal systems and administrative dashboard, accessible only to authorized MoveScout personnel.
          </p>
          <p className="mt-4">
            We use appropriate technical and organizational measures such as encryption and access controls to protect your data from unauthorized access or disclosure.
          </p>
          <p className="mt-4">
            Message delivery through our system is handled by Twilio, our SMS delivery vendor. Only the necessary phone-number data is transmitted to Twilio to facilitate message delivery.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Analytics</h2>
          <p>
            MoveScout may use cookies and third-party analytics tools (such as Google Analytics) to understand user behavior, improve performance, and enhance user experience.
          </p>
          <p className="mt-4">
            Cookies are small text files placed on your device. You can modify your browser settings to decline cookies if you prefer. Disabling cookies may affect certain site features.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
          <p>
            We retain client information for as long as you maintain an active account and for a reasonable period thereafter for recordkeeping and service improvement.
          </p>
          <p className="mt-4">
            If you wish to delete your account or request removal of your information, you may contact us at info@movescout.net and we will comply promptly.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Message Sending and TCPA Compliance</h2>
          <p>
            MoveScout&apos;s dashboard is designed to ensure compliance with the Telephone Consumer Protection Act (TCPA) by requiring manual human action to send each message.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>MoveScout does not automatically send messages to homeowners.</li>
            <li>Clients must manually review and click &quot;Send&quot; for each individual text.</li>
            <li>Because each message is manually initiated, these communications are not considered &quot;automated robotexts&quot; under TCPA.</li>
          </ul>
          <p className="mt-4">
            Clients are responsible for ensuring that their custom message templates and outreach practices remain compliant with all marketing and privacy laws.
          </p>
          <p className="mt-4">
            MoveScout provides TCPA-safe default prompts and offers educational materials, including a downloadable PDF of compliance guidelines, to help users maintain lawful messaging practices.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Sharing of Information</h2>
          <p>We may share limited data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Twilio</strong> – for SMS message delivery.</li>
            <li><strong>Analytics providers</strong> – such as Google Analytics.</li>
          </ul>
          <p className="mt-4 font-semibold">
            We do not sell, rent, or disclose client or homeowner data to unrelated third parties.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Client and Homeowner Rights</h2>
          <p>Clients and homeowners may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal data we hold about them</li>
            <li>Request corrections or updates to their information</li>
            <li>Request deletion of their data</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact info@movescout.net. We will verify your request and respond promptly.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Children&apos;s Privacy</h2>
          <p>
            MoveScout&apos;s services are not intended for or directed toward children under the age of 13. We do not knowingly collect information from minors. If you believe a child has provided us personal data, please contact us and we will delete it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Data Transfers</h2>
          <p>
            MoveScout operates within the United States. By using our Service, you understand that your information may be processed and stored in the U.S.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Third-Party Links</h2>
          <p>
            Our dashboard or communications may contain links to third-party websites or resources. MoveScout is not responsible for the privacy practices or content of external websites.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on our website with a revised effective date. Continued use of the Service after updates constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">15. 30-Day Money Back Guarantee</h2>
          <p>
            MoveScout offers a 30-day money-back guarantee for new customers. If you are not satisfied with our service within the first 30 days of your subscription, you may request a full refund.
          </p>
          <p className="mt-4">
            For specific conditions regarding our lead-opportunity guarantee and refund eligibility, please refer to our <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">16. Contact Us</h2>
          <p>If you have questions or requests regarding this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> info@movescout.net<br />
            <strong>MoveScout LLC</strong><br />
            Pennsylvania, USA
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
