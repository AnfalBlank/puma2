import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "PUMA Admin Panel",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-zinc-950 text-white antialiased">{children}</div>;
}
