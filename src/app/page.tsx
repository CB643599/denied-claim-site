export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Denied Claim Help",
    url: "https://deniedclaimhelp.org/",
    description:
      "General information about denied insurance claims. Learn about options and connect with third-party assistance services.",
    about: {
      "@type": "Organization",
      name: "Syboh Solutions LLC",
      url: "https://sybohsolutions.com",
    },
  };

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Denied Claim Help</p>
        <h1>Insurance Claim Denied?</h1>
        <p className="subheadline">
          If your insurance claim was denied, there may be options to review or appeal the
          decision. This site provides general information and connects users with
          third-party services that specialize in denied claim assistance.
        </p>
        <div className="cta-row">
          <a
            className="btn"
            href="/coming-soon"
          >
            Get Information
          </a>
          <span className="cta-note">No obligation. You decide whether to engage.</span>
        </div>
        <p className="cta-note">Connection options will be available shortly.</p>
      </section>

      <section className="section">
        <h2>Common Situations</h2>
        <ul className="list">
          <li>Insurance claim denied or partially denied</li>
          <li>Coverage decision unclear or unexpected</li>
          <li>Appeal deadline approaching</li>
          <li>Claim denied after prior communication</li>
        </ul>
      </section>

      <section className="section">
        <h2>What This Website Does</h2>
        <p>
          This website provides general informational content about denied insurance claims.
        </p>
        <p>
          Users may be connected to independent third-party companies that offer
          administrative or appeal-related assistance.
        </p>
        <p>Participation is optional, and users decide whether to engage with any third party.</p>
      </section>

      <section className="section emphasis">
        <h2>What This Website Does Not Do</h2>
        <ul className="list">
          <li>We do not provide insurance advice</li>
          <li>We do not provide legal advice</li>
          <li>We do not submit appeals on your behalf</li>
          <li>We do not guarantee claim approval or outcomes</li>
        </ul>
      </section>

      <section className="section">
        <h2>How It Works</h2>
        <ol className="list ordered">
          <li>Review general information about denied insurance claims</li>
          <li>Choose whether to be connected with a third-party service</li>
          <li>Communicate directly with that service to determine next steps</li>
        </ol>
      </section>

      <section className="section cta-section">
        <h2>Learn About Options</h2>
        <p>
          If you would like to learn about third-party services that may assist with
          administrative steps, you can request information below.
        </p>
        <a
          className="btn btn-secondary"
          href="https://deniedclaimhelp.org/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Options
        </a>
      </section>

      <footer className="footer">
        <h2>Disclosures</h2>
        <p>This website provides general information only and does not offer insurance or legal advice.</p>
        <p>
          This website is operated by{" "}
          <a href="https://sybohsolutions.com/contact" target="_blank" rel="noopener noreferrer">
            Syboh Solutions LLC
          </a>
          .
        </p>
        <p>Syboh Solutions LLC may receive compensation from third-party service providers for referrals.</p>
        <p>No outcomes or results are guaranteed.</p>
        <p>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>
        </p>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
