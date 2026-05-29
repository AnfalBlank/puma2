"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const target = sp.get("from") || "/admin";
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Login gagal");
      }
      router.push(target);
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Login gagal");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label className="block">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
          Password
        </span>
        <div className="relative">
          <Lock
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
          />
          <input
            autoFocus
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-950 border border-white/10 focus:border-brand focus:outline-none text-white pl-10 pr-3 py-3 rounded-none placeholder:text-zinc-600"
            placeholder="••••••••"
          />
        </div>
      </label>

      {error && (
        <div className="text-[11px] font-mono uppercase tracking-widest border border-red-500/40 bg-red-500/10 text-red-300 px-4 py-3">
          ✗ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand hover:bg-[var(--brand-dark)] disabled:opacity-60 text-white py-4 font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 group transition-colors shadow-[0_8px_30px_-12px_rgba(234,122,28,0.55)]"
      >
        {status === "submitting" ? "Verifying..." : "Masuk"}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
