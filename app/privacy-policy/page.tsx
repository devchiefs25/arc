import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ARC Privacy Policy for studio, website, social media and booking system interactions.",
  alternates: {
    canonical: "/privacy-policy"
  },
  openGraph: {
    title: "Privacy Policy | ARC",
    description: "How ARC collects, uses, stores and protects personal information.",
    url: "/privacy-policy"
  }
};

const personalInformation = [
  "Full name",
  "Email address",
  "Phone number",
  "Date of birth",
  "Emergency contact information",
  "Health or wellness information relevant to your participation in our services",
  "Payment and billing information",
  "Booking and attendance history",
  "Social media handles or user-generated content when interacting with ARC online"
];

const useCases = [
  "Manage bookings and memberships",
  "Process payments",
  "Provide customer support",
  "Communicate updates, promotions and studio news",
  "Improve our services and customer experience",
  "Maintain studio safety and wellbeing",
  "Comply with legal obligations"
];

const thirdPartyProviders = [
  "Payment processing",
  "Booking systems",
  "Website hosting",
  "Marketing and communications",
  "Analytics and performance tracking"
];

export default function PrivacyPolicy() {
  return (
    <main className="arc-page policy-page">
      <div className="grain" />

      <header className="policy-nav">
        <Link href="/" className="policy-wordmark" aria-label="ARC home">
          ARC
        </Link>
        <Link href="/" className="policy-home-link">
          Back to Home
        </Link>
      </header>

      <article className="policy-wrap">
        <header className="policy-hero">
          <p className="section-eyebrow">ARC</p>
          <h1>Privacy Policy</h1>
          <p>Effective Date: 29 May 2026</p>
        </header>

        <div className="policy-intro">
          <p>
            At ARC, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect,
            use, store and protect your information when you interact with our studio, website, social media platforms or booking systems.
          </p>
          <p>By using our services, you agree to the terms outlined in this policy.</p>
        </div>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          <ul>
            {personalInformation.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            We may also collect non-personal information such as website analytics, device information and browsing behaviour through cookies and
            tracking technologies.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            {useCases.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            We may also use your information for marketing purposes where permitted by law. You can opt out of marketing communications at any time.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Health &amp; Wellness Information</h2>
          <p>
            Certain ARC services may require us to collect health or wellness-related information to ensure suitability and safety during classes or
            recovery sessions.
          </p>
          <p>This information is treated confidentially and is only used for operational and safety purposes.</p>
        </section>

        <section className="policy-section">
          <h2>4. Sharing Your Information</h2>
          <p>We do not sell your personal information.</p>
          <p>We may share your information with trusted third-party providers who assist us with:</p>
          <ul>
            {thirdPartyProviders.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>These providers are required to protect your information and only use it for agreed purposes.</p>
          <p>We may also disclose information where required by law.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Security</h2>
          <p>ARC takes reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification or disclosure.</p>
          <p>While we aim to use secure systems and platforms, no method of online transmission or electronic storage is completely secure.</p>
        </section>

        <section className="policy-section">
          <h2>6. Cookies &amp; Website Tracking</h2>
          <p>Our website may use cookies and similar technologies to improve user experience, analyse website traffic and support marketing activities.</p>
          <p>You can modify your browser settings to disable cookies if preferred.</p>
        </section>

        <section className="policy-section">
          <h2>7. Access &amp; Correction</h2>
          <p>You may request access to the personal information we hold about you and request corrections if necessary.</p>
          <p>To make a request, please contact us using the details below.</p>
        </section>

        <section className="policy-section">
          <h2>8. Third-Party Links</h2>
          <p>
            ARC&apos;s website or social media platforms may contain links to third-party websites. We are not responsible for the privacy practices
            or content of external sites.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Changes to This Policy</h2>
          <p>ARC may update this Privacy Policy from time to time. Any updates will be published on our website with the revised effective date.</p>
        </section>

        <section className="policy-section policy-contact">
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how your information is handled, please contact:</p>
          <address>
            ARC
            <br />
            Email: [Insert Email]
            <br />
            Phone: [Insert Phone Number]
            <br />
            Website: https://arc-alz.vercel.app
          </address>
        </section>
      </article>
    </main>
  );
}
