import "server-only";
import nodemailer from "nodemailer";
import type { Submission } from "./types";

// SMTP config from env. If not configured, email sending is skipped gracefully.
function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export function isEmailConfigured(): boolean {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendContactNotification(s: Submission): Promise<void> {
  const transport = getTransport();
  if (!transport) return; // not configured — no-op

  const to = process.env.NOTIFY_EMAIL || process.env.SMTP_USER!;
  const from = process.env.SMTP_FROM || `PUMA Website <${process.env.SMTP_USER}>`;

  const lines = [
    `Nama: ${s.name}`,
    `Email: ${s.email}`,
    s.phone ? `Telepon: ${s.phone}` : null,
    s.company ? `Perusahaan: ${s.company}` : null,
    s.subject ? `Subjek: ${s.subject}` : null,
    `Halaman: ${s.page}`,
    `Waktu: ${new Date(s.createdAt).toLocaleString("id-ID")}`,
    "",
    s.message,
  ].filter(Boolean);

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="color:#ea7a1c;margin:0 0 12px">Pesan Baru dari Website PUMA</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:4px 8px;color:#666">Nama</td><td style="padding:4px 8px"><b>${esc(s.name)}</b></td></tr>
        <tr><td style="padding:4px 8px;color:#666">Email</td><td style="padding:4px 8px"><a href="mailto:${esc(s.email)}">${esc(s.email)}</a></td></tr>
        ${s.phone ? `<tr><td style="padding:4px 8px;color:#666">Telepon</td><td style="padding:4px 8px">${esc(s.phone)}</td></tr>` : ""}
        ${s.company ? `<tr><td style="padding:4px 8px;color:#666">Perusahaan</td><td style="padding:4px 8px">${esc(s.company)}</td></tr>` : ""}
        ${s.subject ? `<tr><td style="padding:4px 8px;color:#666">Subjek</td><td style="padding:4px 8px">${esc(s.subject)}</td></tr>` : ""}
        <tr><td style="padding:4px 8px;color:#666">Halaman</td><td style="padding:4px 8px">${esc(s.page)}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f6f6f6;border-radius:8px;white-space:pre-wrap;font-size:14px">${esc(s.message)}</div>
    </div>
  `;

  await transport.sendMail({
    from,
    to,
    replyTo: s.email,
    subject: `[Website PUMA] Pesan baru dari ${s.name}${s.subject ? ` — ${s.subject}` : ""}`,
    text: lines.join("\n"),
    html,
  });
}
