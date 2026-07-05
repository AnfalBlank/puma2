import LoginForm from "./LoginForm";
import Image from "next/image";
import { Suspense } from "react";
import { LOGO } from "@/lib/media";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 px-6 py-12 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(234,122,28,0.18), transparent 60%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(234,122,28,0.10), transparent 60%)" }}
      />
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="flex items-center gap-3 mb-10">
          <Image src={LOGO} alt="PUMA" width={676} height={240} className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="text-white font-black uppercase tracking-tighter">
              Prima Usaha <span className="text-brand">Mitra Abadi</span>
            </p>
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-1">
              Admin Console
            </p>
          </div>
        </div>

        <div className="industrial-border bg-zinc-900/80 backdrop-blur-xl p-8 md:p-10">
          <span className="text-brand font-mono text-[10px] uppercase tracking-[0.3em] block mb-3">
            Restricted Area
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2">
            Admin Login
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Masuk untuk mengelola konten landing page PUMA.
          </p>
          <Suspense fallback={<div className="h-32" />}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest text-center mt-6">
          Authorized personnel only · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
