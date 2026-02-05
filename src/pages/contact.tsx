import { useState } from "react";
import Head from "next/head";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const url = new URL(window.location.href);
    formData.append("sourceUrl", url.href);
    formData.append("sourceDomain", url.hostname);
    formData.append("pagePath", url.pathname);
    formData.append("referrer", document.referrer || "");
    formData.append("utm_source", url.searchParams.get("utm_source") || "");
    formData.append("utm_campaign", url.searchParams.get("utm_campaign") || "");
    formData.append("utm_medium", url.searchParams.get("utm_medium") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.message || "Submission failed.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed.";
      setErrorMessage(message);
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Denied Claim Help</title>
        <meta
          name="description"
          content="Request information about denied insurance claim options."
        />
      </Head>
      <main className="page">
        <section className="section">
          <h1>Contact</h1>
          <p>
            Submit your information to request general information and optional referral
            connections.
          </p>
        </section>

        {status === "success" ? (
          <section className="section">
            <h2>Thank you</h2>
            <p>Your information was received. We will review it and follow up as appropriate.</p>
          </section>
        ) : (
          <section className="section">
            <div className="form-card">
              <form onSubmit={handleSubmit} aria-live="polite" className="form">
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="honeypot"
                />
                <div className="form-field">
                  <label htmlFor="firstName">First Name *</label>
                  <span className="field-hint">So we can address you correctly.</span>
                  <input id="firstName" name="firstName" type="text" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <span className="field-hint">Used to send requested information.</span>
                  <input id="email" name="email" type="email" required />
                </div>

                <div className="form-field">
                  <label htmlFor="claimType">Claim Type *</label>
                  <span className="field-hint">Helps route your request appropriately.</span>
                  <select id="claimType" name="claimType" required defaultValue="">
                    <option value="" disabled>
                      Select a claim type
                    </option>
                    <option value="Medical">Medical</option>
                    <option value="Auto">Auto</option>
                    <option value="Property/Home">Property/Home</option>
                    <option value="Disability">Disability</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="description">Brief description (optional)</label>
                  <span className="field-hint">Optional context to better understand your situation.</span>
                  <textarea id="description" name="description" rows={4} />
                </div>

                <button className="btn" type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>

                <p className="cta-note">
                  Your information is used to respond to this request and for referral coordination
                  only.
                </p>
                <p className="cta-note">
                  This form collects information for general informational and referral purposes
                  only. No insurance or legal advice is provided.
                </p>

                {status === "error" && (
                  <p className="cta-note" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>

            <section className="section form-next">
              <h2>What happens next</h2>
              <p>
                We review your request and, if appropriate, share general information or connect
                you with an independent third-party service. Participation is optional.
              </p>
              <p className="cta-note">
                We do not provide insurance or legal advice, and no outcomes are guaranteed.
              </p>
            </section>
          </section>
        )}
      </main>
    </>
  );
}
