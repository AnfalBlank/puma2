"use client";

import { motion } from "framer-motion";

/**
 * About-page hero animation:
 * Timeline 2001 → 2026 of company growth with factory buildings rising
 * and a progress sweep ("kapasitas produksi 3× lipat").
 */
export function AboutHeroAnim() {
  const milestones = [
    { y: 2001, label: "Berdiri" },
    { y: 2007, label: "Vendor BBM" },
    { y: 2015, label: "Pertamina List" },
    { y: 2020, label: "ISO + UL 1746" },
    { y: 2026, label: "Pabrik Baru" },
  ];

  return (
    <div className="relative w-full aspect-[16/10] industrial-border bg-[rgba(10,10,11,0.6)] backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-strong opacity-90" aria-hidden="true" />

      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 z-20">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          COMPANY GROWTH · 2001–2026
        </span>
        <span className="hidden sm:inline">UJB GROUP</span>
      </div>

      <svg viewBox="0 0 800 500" className="relative w-full h-full" fill="none" aria-hidden="true">
        {/* Ground */}
        <line x1="40" y1="380" x2="760" y2="380" stroke="rgba(255,255,255,0.2)" strokeDasharray="6 6" />

        {/* Building set — five buildings of growing height */}
        {[
          { x: 80, w: 90, h: 80, delay: 0.1, label: "01" },
          { x: 200, w: 100, h: 130, delay: 0.25, label: "02" },
          { x: 330, w: 110, h: 180, delay: 0.4, label: "03" },
          { x: 470, w: 130, h: 230, delay: 0.55, label: "04" },
          { x: 630, w: 140, h: 280, delay: 0.7, label: "05" },
        ].map((b, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: b.delay, duration: 0.4 }}
          >
            <motion.rect
              x={b.x}
              y={380}
              width={b.w}
              height={0}
              fill="rgba(234,122,28,0.10)"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
              initial={{ height: 0, y: 380 }}
              animate={{ height: b.h, y: 380 - b.h }}
              transition={{ delay: b.delay + 0.2, duration: 0.7, ease: "easeOut" }}
            />
            {/* Roof */}
            <motion.line
              x1={b.x}
              y1={380 - b.h}
              x2={b.x + b.w}
              y2={380 - b.h}
              stroke="rgba(234,122,28,1)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: b.delay + 0.6, duration: 0.4 }}
            />
            {/* Windows */}
            {Array.from({ length: Math.floor(b.h / 30) }).map((_, row) => (
              <line
                key={row}
                x1={b.x + 8}
                y1={380 - b.h + 18 + row * 30}
                x2={b.x + b.w - 8}
                y2={380 - b.h + 18 + row * 30}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="0.6"
              />
            ))}
            {/* Tag */}
            <motion.text
              x={b.x + b.w / 2}
              y={380 - b.h - 10}
              textAnchor="middle"
              fill="rgba(234,122,28,0.95)"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.2em"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: b.delay + 0.85, duration: 0.3 }}
            >
              /{b.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Timeline line */}
        <motion.line
          x1="40"
          y1="430"
          x2="760"
          y2="430"
          stroke="rgba(234,122,28,0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* Milestones */}
        {milestones.map((m, i) => {
          const x = 90 + i * 145;
          return (
            <motion.g
              key={m.y}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.4 }}
            >
              <line x1={x} y1="424" x2={x} y2="436" stroke="rgba(234,122,28,1)" strokeWidth="1.4" />
              <circle cx={x} cy="430" r="4" fill="rgba(234,122,28,1)" />
              <text
                x={x}
                y={460}
                textAnchor="middle"
                fill="#fff"
                fontFamily="ui-monospace, monospace"
                fontSize="11"
                fontWeight="900"
                letterSpacing="0.15em"
              >
                {m.y}
              </text>
              <text
                x={x}
                y={478}
                textAnchor="middle"
                fill="rgba(255,255,255,0.55)"
                fontFamily="ui-monospace, monospace"
                fontSize="8"
                letterSpacing="0.2em"
              >
                {m.label.toUpperCase()}
              </text>
            </motion.g>
          );
        })}

        {/* Capacity sweep ribbon */}
        <motion.rect
          y="100"
          height="280"
          width="200"
          fill="url(#aboutSweep)"
          initial={{ x: -220 }}
          animate={{ x: 820 }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
            delay: 2.2,
          }}
        />
        <defs>
          <linearGradient id="aboutSweep" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(234,122,28,0)" />
            <stop offset="50%" stopColor="rgba(234,122,28,0.45)" />
            <stop offset="100%" stopColor="rgba(234,122,28,0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom stat strip */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest z-20">
        <span className="text-zinc-500">Member of UJB Group</span>
        <span className="text-brand font-bold">Kapasitas 3× Lipat — 2026</span>
      </div>

      <CornerTicks />
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-brand" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand" />
    </>
  );
}
