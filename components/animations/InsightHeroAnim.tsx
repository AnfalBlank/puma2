"use client";

import { motion } from "framer-motion";

/**
 * Insight-page hero animation:
 * Engineering paper with technical drawing lines being plotted, plus a
 * scrolling RSS-like ticker of headline keywords. Communicates "industry notes".
 */
export function InsightHeroAnim() {
  const tickers = [
    "STANDAR UL 1746",
    "MATERIAL HIGH-TENSILE",
    "VAPOR RECOVERY SYSTEM",
    "STATIC GROUNDING",
    "ATG SYSTEM",
    "MODULAR TANK STORAGE",
    "ANTI-CORROSION LINING",
  ];

  return (
    <div className="relative w-full aspect-[16/10] industrial-border bg-[rgba(10,10,11,0.6)] backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-strong opacity-90" aria-hidden="true" />

      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 z-20">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          ENGINEERING NOTES · TECH FEED
        </span>
        <span className="hidden sm:inline">VOL 04</span>
      </div>

      <svg
        viewBox="0 0 800 460"
        className="relative w-full h-full"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Two dashed axes */}
        <motion.line
          x1="60"
          y1="60"
          x2="60"
          y2="380"
          stroke="rgba(255,255,255,0.25)"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.line
          x1="60"
          y1="380"
          x2="760"
          y2="380"
          stroke="rgba(255,255,255,0.25)"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        {/* Y ticks */}
        {[0.2, 0.4, 0.6, 0.8].map((p, i) => (
          <line
            key={i}
            x1="56"
            x2="64"
            y1={60 + (380 - 60) * p}
            y2={60 + (380 - 60) * p}
            stroke="rgba(255,255,255,0.25)"
          />
        ))}

        {/* Stress curve — strength vs deflection */}
        <motion.path
          d="M 60 360 C 180 350, 300 280, 420 200 S 700 80, 760 70"
          stroke="rgba(234,122,28,0.95)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
        />
        {/* Curve area glow */}
        <motion.path
          d="M 60 360 C 180 350, 300 280, 420 200 S 700 80, 760 70 L 760 380 L 60 380 Z"
          fill="rgba(234,122,28,0.15)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        />

        {/* Plotted points / annotations */}
        {[
          { x: 180, y: 348, lab: "BASELINE" },
          { x: 360, y: 250, lab: "UL TEST" },
          { x: 540, y: 150, lab: "FAT" },
          { x: 700, y: 90, lab: "DELIVERY" },
        ].map((pt, i) => (
          <motion.g
            key={pt.lab}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 + i * 0.2, duration: 0.4 }}
            style={{ transformOrigin: `${pt.x}px ${pt.y}px` }}
          >
            <circle cx={pt.x} cy={pt.y} r="6" fill="rgba(234,122,28,1)" />
            <circle
              cx={pt.x}
              cy={pt.y}
              r="11"
              fill="none"
              stroke="rgba(234,122,28,0.4)"
              strokeWidth="1"
            />
            <text
              x={pt.x}
              y={pt.y - 18}
              textAnchor="middle"
              fill="#fff"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.18em"
            >
              {pt.lab}
            </text>
          </motion.g>
        ))}

        {/* Header brackets — labelled "STRENGTH GRAPH" */}
        <text
          x="60"
          y="40"
          fill="rgba(234,122,28,0.9)"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.25em"
        >
          STRENGTH / TIME · RECORDED VALUES
        </text>
      </svg>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-9 border-t border-white/10 bg-zinc-950/70 backdrop-blur-sm overflow-hidden flex items-center z-20">
        <span className="px-4 py-2 bg-brand text-white text-[10px] font-black uppercase tracking-widest shrink-0">
          LIVE
        </span>
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...tickers, ...tickers].map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.25em]"
              >
                · {t}
              </span>
            ))}
          </motion.div>
        </div>
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
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand z-20" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand z-20" />
    </>
  );
}
