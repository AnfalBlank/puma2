"use client";

import { motion } from "framer-motion";

/**
 * Contact-page hero animation:
 * Communication network — pulse waves emitting from a central PUMA hub
 * connecting to channel nodes (WhatsApp / Phone / Email / IG).
 */
export function ContactHeroAnim() {
  const channels = [
    { angle: -90, radius: 130, label: "WHATSAPP", sub: "+62 857-5463-7579" },
    { angle: -30, radius: 160, label: "PHONE", sub: "(0264) 8330330" },
    { angle: 30, radius: 160, label: "EMAIL", sub: "marketing@puma..." },
    { angle: 90, radius: 130, label: "INSTAGRAM", sub: "@puma_engineering" },
    { angle: 150, radius: 160, label: "WORKSHOP", sub: "Karawang, Jabar" },
    { angle: -150, radius: 160, label: "PROJECT MGR", sub: "FAT & Delivery" },
  ];

  const cx = 400;
  const cy = 230;

  return (
    <div className="relative w-full aspect-[16/10] industrial-border bg-[rgba(10,10,11,0.6)] backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-strong opacity-90" aria-hidden="true" />

      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 z-20">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ONLINE · BALAS CEPAT
        </span>
        <span className="hidden sm:inline">SUPPORT 24/7</span>
      </div>

      <svg viewBox="0 0 800 460" className="relative w-full h-full" fill="none" aria-hidden="true">
        {/* Outer rings (radar) */}
        {[80, 130, 180, 230].map((r, i) => (
          <motion.circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
          />
        ))}

        {/* Connection lines */}
        {channels.map((ch, i) => {
          const rad = (ch.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * ch.radius;
          const y = cy + Math.sin(rad) * ch.radius;
          return (
            <motion.line
              key={ch.label}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="rgba(234,122,28,0.5)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
            />
          );
        })}

        {/* Pulses traveling along each line */}
        {channels.map((ch, i) => {
          const rad = (ch.angle * Math.PI) / 180;
          return (
            <motion.circle
              key={`pulse-${ch.label}`}
              r="3"
              fill="rgba(234,122,28,1)"
              initial={{ cx, cy, opacity: 0 }}
              animate={{
                cx: cx + Math.cos(rad) * ch.radius,
                cy: cy + Math.sin(rad) * ch.radius,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.6,
                delay: 1.4 + i * 0.25,
                repeat: Infinity,
                repeatDelay: 2.4,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Channel nodes */}
        {channels.map((ch, i) => {
          const rad = (ch.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * ch.radius;
          const y = cy + Math.sin(rad) * ch.radius;
          // Anchor labels so they don't run off the SVG edges
          const isLeft = x < cx - 40;
          const isRight = x > cx + 40;
          const anchor = isLeft ? "end" : isRight ? "start" : "middle";
          const labelOffsetX = isLeft ? -16 : isRight ? 16 : 0;
          const labelOffsetY = ch.angle === -90 ? -22 : ch.angle === 90 ? 32 : 4;
          return (
            <motion.g
              key={`node-${ch.label}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle cx={x} cy={y} r="10" fill="rgba(10,10,11,1)" stroke="rgba(234,122,28,1)" strokeWidth="1.5" />
              <circle cx={x} cy={y} r="3.5" fill="rgba(234,122,28,1)" />
              <text
                x={x + labelOffsetX}
                y={y + labelOffsetY}
                textAnchor={anchor}
                fill="#fff"
                fontFamily="ui-monospace, monospace"
                fontSize="10"
                fontWeight="700"
                letterSpacing="0.18em"
              >
                {ch.label}
              </text>
              <text
                x={x + labelOffsetX}
                y={y + labelOffsetY + 14}
                textAnchor={anchor}
                fill="rgba(255,255,255,0.55)"
                fontFamily="ui-monospace, monospace"
                fontSize="9"
                letterSpacing="0.15em"
              >
                {ch.sub}
              </text>
            </motion.g>
          );
        })}

        {/* Central hub */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          {/* Pulsing outer halos */}
          <motion.circle
            cx={cx}
            cy={cy}
            r="30"
            fill="none"
            stroke="rgba(234,122,28,1)"
            strokeWidth="1"
            animate={{ r: [28, 60, 28], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            cx={cx}
            cy={cy}
            r="30"
            fill="none"
            stroke="rgba(234,122,28,0.7)"
            strokeWidth="1"
            animate={{ r: [28, 80, 28], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          />
          <circle cx={cx} cy={cy} r="32" fill="rgba(234,122,28,0.15)" stroke="rgba(234,122,28,0.6)" />
          <circle cx={cx} cy={cy} r="22" fill="rgba(234,122,28,1)" />
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            fill="#fff"
            fontFamily="ui-monospace, monospace"
            fontSize="14"
            fontWeight="900"
            letterSpacing="0.2em"
          >
            PUMA
          </text>
        </motion.g>
      </svg>

      {/* Bottom strip */}
      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-3 z-20 text-[10px] font-mono uppercase tracking-widest">
        <span className="text-zinc-500">Senin–Sabtu · 08.00–17.00 WIB</span>
        <span className="text-brand font-bold text-right">Avg. Reply &lt; 5 min</span>
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
