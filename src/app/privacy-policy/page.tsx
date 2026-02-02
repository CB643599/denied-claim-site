export const metadata = {
  title: "Privacy Policy | Denied Claim Help",
  description:
    "Privacy Policy for Denied Claim Help. General information about data collection and use.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page">
      <section className="section">
        <h1>Privacy Policy</h1>
        <p>
          This website provides general information and may collect limited data when users
          interact with links or forms.
        </p>
      </section>

      <section className="section">
        <h2>Information Collected</h2>
        <ul className="list">
          <li>Basic technical data (IP address, browser type, device type)</li>
          <li>Interaction data (pages viewed, outbound link clicks)</li>
          <li>
            Information voluntarily provided when users engage with third-party partners
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Use of Information</h2>
        <ul className="list">
          <li>Data is used to operate and improve the website</li>
          <li>Data may be shared with third-party service providers for referral purposes</li>
          <li>No sensitive personal data is intentionally collected</li>
        </ul>
      </section>

      <section className="section">
        <h2>Third-Party Links</h2>
        <p>
          This site contains links to third-party websites. This site is not responsible for
          third-party privacy practices.
        </p>
      </section>

      <section className="section">
        <h2>Cookies &amp; Tracking</h2>
        <p>
          This site may use standard analytics or tracking tools. Users may disable cookies
          through their browser.
        </p>
      </section>

      <section className="section">
        <h2>Contact Information</h2>
        <p>
          For questions about this Privacy Policy, contact Syboh Solutions LLC at{" "}
          <a href="https://sybohsolutions.com/contact" target="_blank" rel="noopener noreferrer">
            https://sybohsolutions.com/contact
          </a>
          .
        </p>
      </section>
    </main>
  );
}
