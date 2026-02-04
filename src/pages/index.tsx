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
        <link rel="canonical" href="https://example.com/" />
      </Head>
      <main className="page">
        <section className="hero">
          <p className="eyebrow">Denied Claim Help</p>
          <h1>Insurance Claim Denied?</h1>
          <p className="subheadline">
            General information for denied insurance claims and options to review or appeal a
            decision.
          </p>
          <div className="cta-row">
            <a className="btn" href="/coming-soon">
              Get Information
            </a>
            <span className="cta-note">No obligation. You decide whether to engage.</span>
          </div>
        </section>
      </main>
    </>
  );
}
