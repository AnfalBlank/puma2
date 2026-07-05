"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, X, Send, Clock, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const QUICK_PROMPTS = [
  {
    label: "Mobil Tangki BBM Pertamina",
    msg: "Halo PUMA, saya ingin konsultasi spesifikasi Mobil Tangki BBM Pertamina (kapasitas, axle, kelengkapan vapor recovery).",
  },
  {
    label: "UGT / Tangki Pendam UL 1746",
    msg: "Halo PUMA, saya ingin penawaran UGT / Tangki Pendam UL 1746 (double wall) untuk SPBU/Depo BBM.",
  },
  {
    label: "AST / Modular Tank Storage",
    msg: "Halo PUMA, saya ingin konsultasi AST (Above Ground Storage Tank) / Modular Tank Storage untuk fasilitas industri.",
  },
  {
    label: "Tangki Kimia",
    msg: "Halo PUMA, saya ingin konsultasi Tangki Kimia dengan material/lining khusus.",
  },
  {
    label: "Support Mining Unit",
    msg: "Halo PUMA, saya butuh penawaran unit support pertambangan (Fuel Truck / Lube Truck / Water Truck / Dump Truck).",
  },
  {
    label: "Wingbox · Semi Trailer · Losbak",
    msg: "Halo PUMA, saya ingin konsultasi karoseri niaga (Wingbox / Semi Trailer / Losbak).",
  },
];

const STORAGE_KEY = "puma_wa_dismissed";

function isWithinBusinessHours(): boolean {
  // Workshop hours, Asia/Jakarta-ish (UTC+7), Mon–Sat 08:00–17:00
  const nowUTC = new Date();
  const wibMs = nowUTC.getTime() + 7 * 60 * 60 * 1000;
  const wib = new Date(wibMs);
  const day = wib.getUTCDay(); // 0 = Sun
  const hour = wib.getUTCHours();
  if (day === 0) return false;
  return hour >= 8 && hour < 17;
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(isWithinBusinessHours());
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* SSR / privacy mode */
    }
    if (dismissed) return;
    const t = setTimeout(() => setShowHint(true), 4000);
    return () => clearTimeout(t);
  }, []);

  function dismissHint() {
    setShowHint(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  function openPanel() {
    setOpen(true);
    dismissHint();
  }

  return (
    <div
      className="fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3"
      aria-live="polite"
    >
      {/* Hint bubble */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={openPanel}
            className="group relative max-w-[280px] text-left bg-white text-zinc-900 border border-zinc-200 px-4 py-3 pr-9 rounded-md shadow-2xl"
          >
            <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              PUMA Sales
            </span>
            <span className="block text-sm font-bold leading-snug">
              Butuh penawaran cepat tangki BBM, UGT, atau mining unit?
            </span>
            <span
              role="button"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                dismissHint();
              }}
              className="absolute top-1.5 right-1.5 p-1 text-zinc-400 hover:text-zinc-700"
              aria-label="Tutup notifikasi"
            >
              <X size={12} />
            </span>
            {/* Arrow */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-zinc-200 rotate-45"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="w-[min(92vw,360px)] origin-bottom-right bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Hubungi PUMA via WhatsApp"
          >
            {/* Header */}
            <div className="relative bg-brand text-white px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-10 w-10 items-center justify-center bg-white/15 rounded-full">
                    <MessageCircle size={20} />
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-brand ${
                        online ? "bg-emerald-400" : "bg-zinc-300"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-black uppercase tracking-wide">
                      PUMA Sales Engineer
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-widest opacity-90 flex items-center gap-1.5">
                      <Clock size={10} />
                      {online ? "Online · Balas cepat" : "Senin–Sabtu · 08.00–17.00 WIB"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-1 text-white/90 hover:text-white"
                  aria-label="Tutup panel WhatsApp"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="bg-zinc-900 border border-white/5 p-4">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Halo, saya tim sales{" "}
                  <span className="text-white font-bold">{SITE.short}</span>. Pilih topik
                  konsultasi atau langsung kirim pesan custom.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                  Quick Prompts
                </span>
                <ul className="space-y-2">
                  {QUICK_PROMPTS.map((p) => (
                    <li key={p.label}>
                      <a
                        href={waLink(p.msg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between gap-3 w-full px-4 py-3 bg-zinc-900 border border-white/5 hover:border-brand/50 hover:bg-zinc-900/60 transition-colors"
                      >
                        <span className="text-white text-xs font-bold uppercase tracking-wide">
                          {p.label}
                        </span>
                        <Send
                          size={14}
                          className="text-zinc-500 group-hover:text-brand transition-colors shrink-0"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={waLink("Halo PUMA, saya ingin konsultasi proyek.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand hover:bg-[var(--brand-dark)] text-white text-[11px] font-black uppercase tracking-widest px-4 py-3 inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={14} />
                  Mulai Chat
                </a>
                <a
                  href={SITE.phone.href}
                  className="border border-white/20 hover:border-brand hover:text-brand text-white text-[11px] font-black uppercase tracking-widest px-4 py-3 inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={14} />
                  Telepon
                </a>
              </div>

              <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest text-center">
                {SITE.whatsapp.display} · {SITE.phone.display}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => (open ? setOpen(false) : openPanel())}
        whileTap={{ scale: 0.95 }}
        className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-brand text-white shadow-[0_12px_40px_-8px_rgba(234,122,28,0.6)] flex items-center justify-center hover:bg-[var(--brand-dark)] transition-colors"
        aria-label={open ? "Tutup panel WhatsApp" : "Buka panel WhatsApp"}
        aria-expanded={open}
      >
        {/* Pulse rings */}
        {!open && (
          <>
            <span
              className="absolute inset-0 rounded-full border-2 border-brand/60 animate-ping"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 rounded-full border border-brand/30 animate-pulse"
              aria-hidden="true"
            />
          </>
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={26} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <WhatsAppIcon className="w-7 h-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.48 15.18L2 22l4.96-1.49A10 10 0 1 0 19.05 4.9zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.94.88.88-2.86-.2-.3a8.3 8.3 0 1 1 6.78 3.62zm4.55-6.18c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.16.25-.64.8-.79.97-.15.16-.29.18-.54.06a6.78 6.78 0 0 1-2-1.24 7.5 7.5 0 0 1-1.39-1.73c-.14-.25-.02-.39.11-.51.12-.12.25-.3.38-.45.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.06-.13-.55-1.34-.76-1.83-.2-.48-.41-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.5.58.19 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.21-.59.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}
