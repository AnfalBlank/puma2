"use client";

import { motion } from "framer-motion";

/**
 * Blueprint-style fuel tank truck SVG.
 * - Strokes draw in via stroke-dasharray
 * - Brand orange scanner sweep moves across the chassis
 * - Wheels rotate
 * - Animated fuel-gauge bar
 *
 * Designed at 800x420 viewBox; scales fluid via parent.
 */
export function HeroBlueprint() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[16/10]">
      {/* Frame */}
      <div className="absolute inset-0 industrial-border bg-[rgba(10,10,11,0.6)] backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-strong opacity-90" aria-hidden="true" />

        {/* Top tag bar */}
        <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 z-20">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            DRAWING · MTK-BBM/PRTM/16KL
          </span>
          <span className="hidden sm:inline">REV-04 · ISO 9001:2015</span>
        </div>

        {/* Bottom gauge */}
        <FuelGauge />

        <svg
          viewBox="0 0 800 420"
          className="relative w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="scanGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(234,122,28,0)" />
              <stop offset="40%" stopColor="rgba(234,122,28,0.15)" />
              <stop offset="50%" stopColor="rgba(234,122,28,0.6)" />
              <stop offset="60%" stopColor="rgba(234,122,28,0.15)" />
              <stop offset="100%" stopColor="rgba(234,122,28,0)" />
            </linearGradient>
            <linearGradient id="tankSheen" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
            </linearGradient>
            <pattern id="rivet" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="7" cy="7" r="0.8" fill="rgba(234,122,28,0.45)" />
            </pattern>
          </defs>

          {/* Ground line + scale */}
          <motion.line
            x1="40"
            x2="760"
            y1="332"
            y2="332"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* tick scale */}
          {Array.from({ length: 19 }).map((_, i) => (
            <line
              key={i}
              x1={40 + i * 40}
              x2={40 + i * 40}
              y1="332"
              y2={i % 5 === 0 ? "342" : "337"}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
          ))}

          {/* Cab */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <DrawnPath
              d="M 78 238 L 78 188 L 110 188 L 130 168 L 178 168 L 188 188 L 200 188 L 200 248 L 78 248 L 78 238 Z"
              delay={0.4}
            />
            {/* windshield */}
            <DrawnPath
              d="M 116 192 L 132 176 L 174 176 L 184 192 Z"
              delay={0.85}
              stroke="rgba(234,122,28,0.7)"
            />
            {/* door split */}
            <DrawnPath d="M 145 200 L 145 244" delay={1} />
            {/* headlight */}
            <DrawnPath d="M 84 220 L 92 220 L 92 230 L 84 230 Z" delay={1.05} />
          </motion.g>

          {/* Chassis rail */}
          <DrawnPath d="M 78 248 L 720 248" delay={0.55} />
          <DrawnPath d="M 78 254 L 720 254" delay={0.6} />

          {/* Tank body — multi-chamber */}
          <DrawnPath
            d="M 220 168 L 690 168 Q 720 168 720 198 L 720 248 L 220 248 Z"
            delay={0.7}
          />
          {/* tank sheen */}
          <motion.rect
            x="220"
            y="170"
            width="500"
            height="78"
            fill="url(#tankSheen)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          />
          {/* rivets */}
          <motion.rect
            x="220"
            y="170"
            width="500"
            height="78"
            fill="url(#rivet)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          />

          {/* Chamber dividers */}
          {[330, 440, 550, 660].map((x, i) => (
            <DrawnPath key={x} d={`M ${x} 168 L ${x} 248`} delay={0.95 + i * 0.08} />
          ))}

          {/* Manholes / domes */}
          {[275, 385, 495, 605].map((x, i) => (
            <motion.g
              key={x}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.08, duration: 0.5 }}
            >
              <rect x={x - 12} y={148} width={24} height={20} fill="none" stroke="rgba(255,255,255,0.7)" />
              <circle cx={x} cy={158} r={5} fill="none" stroke="rgba(234,122,28,0.9)" strokeWidth="1.2" />
            </motion.g>
          ))}

          {/* Vapor recovery line */}
          <DrawnPath
            d="M 235 168 L 235 142 L 685 142 L 685 168"
            delay={1.7}
            stroke="rgba(234,122,28,0.55)"
          />
          {/* relief valve */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.4 }}
          >
            <line x1="460" y1="142" x2="460" y2="118" stroke="rgba(234,122,28,0.8)" strokeWidth="1.4" />
            <circle cx="460" cy="114" r="5" fill="none" stroke="rgba(234,122,28,0.9)" strokeWidth="1.4" />
          </motion.g>

          {/* Side discharge cabinet */}
          <DrawnPath d="M 540 248 L 540 282 L 660 282 L 660 248" delay={1.1} />
          <DrawnPath d="M 555 258 L 645 258" delay={1.3} />
          <DrawnPath d="M 555 268 L 645 268" delay={1.4} />

          {/* Wheels */}
          {[140, 250, 470, 580, 660].map((cx, i) => (
            <Wheel key={cx} cx={cx} cy={300} delay={1.2 + i * 0.06} />
          ))}

          {/* Static grounding cable */}
          <motion.path
            d="M 720 254 Q 738 282 730 318 Q 728 326 740 332"
            fill="none"
            stroke="rgba(234,122,28,0.6)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          />

          {/* Callouts */}
          <Callout x1={275} y1={148} x2={195} y2={92} label="MANHOLE" sub="ATG READY" delay={2.2} />
          <Callout x1={460} y1={114} x2={400} y2={56} label="VAPOR RECOVERY" sub="P/T VALVE" delay={2.35} flipText />
          <Callout x1={605} y1={148} x2={680} y2={92} label="UL 1746" sub="DOUBLE WALL" delay={2.5} />
          <Callout
            x1={730}
            y1={332}
            x2={760}
            y2={372}
            label="STATIC GROUND"
            sub="ANTI-SPARK"
            delay={2.65}
          />

          {/* Scanner sweep */}
          <motion.rect
            y="60"
            height="320"
            width="220"
            fill="url(#scanGradient)"
            initial={{ x: -240 }}
            animate={{ x: 820 }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.2,
              delay: 2.8,
            }}
          />
          {/* Scanner edge line */}
          <motion.line
            y1="60"
            y2="380"
            x1="0"
            x2="0"
            stroke="rgba(234,122,28,0.9)"
            strokeWidth="1"
            initial={{ x: -10 }}
            animate={{ x: 810 }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.2,
              delay: 2.8,
            }}
          />
        </svg>

        {/* Corner ticks */}
        <CornerTick className="top-3 left-3" />
        <CornerTick className="top-3 right-3 rotate-90" />
        <CornerTick className="bottom-3 left-3 -rotate-90" />
        <CornerTick className="bottom-3 right-3 rotate-180" />
      </div>
    </div>
  );
}

function DrawnPath({
  d,
  delay = 0,
  stroke = "rgba(255,255,255,0.85)",
  width = 1.2,
}: {
  d: string;
  delay?: number;
  stroke?: string;
  width?: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="square"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ pathLength: { delay, duration: 0.9, ease: "easeInOut" }, opacity: { delay, duration: 0.2 } }}
    />
  );
}

function Wheel({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <circle cx={cx} cy={cy} r="28" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: delay + 0.5 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <circle cx={cx} cy={cy} r="14" fill="none" stroke="rgba(234,122,28,0.7)" strokeWidth="1" />
        <line x1={cx - 14} y1={cy} x2={cx + 14} y2={cy} stroke="rgba(234,122,28,0.55)" strokeWidth="1" />
        <line x1={cx} y1={cy - 14} x2={cx} y2={cy + 14} stroke="rgba(234,122,28,0.55)" strokeWidth="1" />
      </motion.g>
      <circle cx={cx} cy={cy} r="3" fill="rgba(234,122,28,1)" />
    </motion.g>
  );
}

function Callout({
  x1,
  y1,
  x2,
  y2,
  label,
  sub,
  delay,
  flipText = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  sub: string;
  delay: number;
  flipText?: boolean;
}) {
  const labelW = Math.max(label.length, sub.length) * 6.2 + 16;
  const tx = flipText ? x2 - labelW : x2;
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(234,122,28,0.7)" strokeWidth="1" />
      <circle cx={x1} cy={y1} r="2.5" fill="rgba(234,122,28,1)" />
      <line
        x1={tx}
        y1={y2}
        x2={tx + labelW}
        y2={y2}
        stroke="rgba(234,122,28,0.5)"
        strokeWidth="1"
      />
      <text
        x={tx + 4}
        y={y2 - 6}
        fill="#fff"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.18em"
      >
        {label}
      </text>
      <text
        x={tx + 4}
        y={y2 + 12}
        fill="rgba(234,122,28,0.95)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontSize="8"
        letterSpacing="0.18em"
      >
        {sub}
      </text>
    </motion.g>
  );
}

function CornerTick({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute w-3 h-3 ${className}`}
      style={{
        borderTop: "2px solid var(--brand)",
        borderLeft: "2px solid var(--brand)",
      }}
      aria-hidden="true"
    />
  );
}

function FuelGauge() {
  return (
    <div className="absolute bottom-3 left-3 right-3 z-20 grid grid-cols-12 items-center gap-3">
      <div className="col-span-7 sm:col-span-8 flex items-center gap-3">
        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 shrink-0">
          Capacity
        </span>
        <div className="relative flex-1 h-2 bg-white/5 border border-white/10 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-brand"
            initial={{ width: 0 }}
            animate={{ width: "82%" }}
            transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 flex">
            {Array.from({ length: 11 }).map((_, i) => (
              <span
                key={i}
                className="flex-1 border-r border-white/10 last:border-r-0"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-5 sm:col-span-4 flex items-center justify-end gap-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em]">
        <span className="text-zinc-500">16,000 L</span>
        <span className="text-brand font-bold">82%</span>
      </div>
    </div>
  );
}
