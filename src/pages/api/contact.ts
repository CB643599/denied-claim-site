import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ApiResponse = { ok: true } | { ok: false; message: string };

const requiredFields = ["firstName", "email", "claimType"] as const;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  const {
    firstName,
    email,
    claimType,
    description,
    sourceUrl,
    sourceDomain,
    pagePath,
    referrer,
    utm_source,
    utm_campaign,
    utm_medium,
  } = req.body ?? {};

  for (const field of requiredFields) {
    if (!req.body?.[field]) {
      return res.status(400).json({ ok: false, message: "Missing required fields." });
    }
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom) {
    return res.status(500).json({ ok: false, message: "Email is not configured." });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const timestamp = new Date().toISOString();
  const userAgent = req.headers["user-agent"] || "N/A";
  const toAddress = "info@sybohsolutions.com";

  const text = [
    "New denied claim lead submission",
    "",
    `First Name: ${firstName}`,
    `Email Address: ${email}`,
    `Claim Type: ${claimType}`,
    `Brief Description: ${description || "N/A"}`,
    `Source URL: ${sourceUrl || "N/A"}`,
    `Lead Source Domain: ${sourceDomain || "N/A"}`,
    `Page Path: ${pagePath || "N/A"}`,
    `Referrer: ${referrer || "N/A"}`,
    `User Agent: ${userAgent}`,
    `UTM Source: ${utm_source || "N/A"}`,
    `UTM Campaign: ${utm_campaign || "N/A"}`,
    `UTM Medium: ${utm_medium || "N/A"}`,
    `Timestamp: ${timestamp}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: toAddress,
      replyTo: email,
      subject: "Denied Claim Lead Submission",
      text,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, message: "Unable to send email." });
  }

  return res.status(200).json({ ok: true });
}
