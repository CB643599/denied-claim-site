import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Insurance Claim Denied? | Denied Claim Help</title>
        <meta
          name="description"
          content="General information about denied insurance claims. Learn about options and connect with third-party assistance services."
        />
        <link rel="canonical" href="https://deniedclaimhelp.org/" />
      </Head>
      <main className="page">
        <section className="hero">
          <p className="eyebrow">Denied Claim Help</p>
          <h1>Insurance Claim Denied?</h1>
          <p className="subheadline">
            This website provides general information about denied insurance claims. It does
            not promise outcomes or guarantee approvals.
          </p>
          <div className="cta-row">
            <a className="btn" href="/contact">
              Get Information
            </a>
            <span className="cta-note">No obligation. You decide whether to engage.</span>
          </div>
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
          <p>This website provides general informational content about denied insurance claims.</p>
          <p>
            Users may be connected with independent third-party services that offer
            administrative or appeal-related assistance.
          </p>
          <p>Participation is optional, and users decide whether to engage.</p>
        </section>

        <section className="section">
          <h2>What This Website Does Not Do</h2>
          <ul className="list">
            <li>Does not provide insurance advice</li>
            <li>Does not provide legal advice</li>
            <li>Does not submit appeals</li>
            <li>Does not guarantee outcomes</li>
          </ul>
        </section>

        <section className="section">
          <h2>How It Works</h2>
          <ol className="list ordered">
            <li>Review general information</li>
            <li>Choose whether to be connected</li>
            <li>Communicate directly with third parties</li>
          </ol>
        </section>

        <section className="section cta-section">
          <h2>Learn About Options</h2>
          <p>
            If you would like to learn about third-party services that may assist with
            administrative steps, you can request information below.
          </p>
          <a className="btn btn-secondary" href="/contact">
            Learn About Options
          </a>
        </section>

        <footer className="footer">
          <h2>Disclosures</h2>
          <p>
            This website provides general information only and does not offer insurance or legal
            advice.
          </p>
          <p>No outcomes or results are guaranteed.</p>
          <p>
            This website is operated by{" "}
            <a href="https://sybohsolutions.com/contact" target="_blank" rel="noopener noreferrer">
              Syboh Solutions LLC
            </a>
            .
          </p>
          <p>Syboh Solutions LLC may receive compensation from third-party service providers for referrals.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-of-use">Terms of Use</a>
          </p>
        </footer>
      </main>
    </>
  );
}
