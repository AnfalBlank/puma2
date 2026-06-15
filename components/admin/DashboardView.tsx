"use client";

import { useEffect, useState } from "react";
import {
  Eye,
  Users,
  Mail,
  MailOpen,
  TrendingUp,
  RefreshCw,
  Globe,
  FileText,
} from "lucide-react";
import type { DashboardStats } from "@/lib/analytics";

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
}: {
  label: string;
  value: number | string;
  sub?: string;
  icon: typeof Eye;
}) {
  return (
    <div className="industrial-border bg-zinc-900/60 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{label}</p>
          <p className="text-3xl font-black mt-2 tabular-nums">{value}</p>
          {sub && <p className="text-[11px] text-zinc-500 mt-1 font-mono">{sub}</p>}
        </div>
        <span className="text-brand/70">
          <Icon size={20} />
        </span>
      </div>
    </div>
  );
}

function MiniBarChart({ data }: { data: { date: string; views: number; visitors: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.views));
  return (
    <div className="flex items-end gap-2 h-40">
      {data.map((d) => {
        const h = Math.round((d.views / max) * 100);
        const label = new Date(d.date).toLocaleDateString("id-ID", {
          weekday: "short",
        });
        return (
          <div key={d.date} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col justify-end h-full">
              <div
                className="w-full bg-brand/80 hover:bg-brand transition-colors relative group"
                style={{ height: `${Math.max(h, 2)}%` }}
                title={`${d.views} views · ${d.visitors} visitor`}
              >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100">
                  {d.views}
                </span>
              </div>
            </div>
            <span className="text-[9px] font-mono uppercase text-zinc-500">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function DashboardView({ initial }: { initial: DashboardStats }) {
  const [stats, setStats] = useState<DashboardStats>(initial);
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) setStats(await res.json());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black uppercase tracking-tight">Ringkasan</h2>
          <p className="text-zinc-500 text-xs mt-1">Statistik kunjungan & pesan masuk.</p>
        </div>
        <button
          type="button"
          onClick={refresh}
          className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Kunjungan"
          value={stats.totals.views.toLocaleString("id-ID")}
          sub={`${stats.today.views} hari ini`}
          icon={Eye}
        />
        <StatCard
          label="Pengunjung Unik"
          value={stats.totals.visitors.toLocaleString("id-ID")}
          sub={`${stats.today.visitors} hari ini`}
          icon={Users}
        />
        <StatCard
          label="Total Pesan"
          value={stats.totals.submissions.toLocaleString("id-ID")}
          sub={`${stats.recentSubmissions} dalam 7 hari`}
          icon={Mail}
        />
        <StatCard
          label="Belum Dibaca"
          value={stats.totals.unread.toLocaleString("id-ID")}
          sub={stats.totals.unread > 0 ? "perlu ditindak" : "semua terbaca"}
          icon={stats.totals.unread > 0 ? Mail : MailOpen}
        />
      </div>

      <div className="industrial-border bg-zinc-900/60 p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp size={16} className="text-brand" />
          <h3 className="text-sm font-black uppercase tracking-widest">Kunjungan 7 Hari Terakhir</h3>
        </div>
        <MiniBarChart data={stats.last7Days} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="industrial-border bg-zinc-900/60 p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={16} className="text-brand" />
            <h3 className="text-sm font-black uppercase tracking-widest">Halaman Teratas</h3>
          </div>
          {stats.topPages.length === 0 ? (
            <p className="text-zinc-500 text-sm font-mono">Belum ada data.</p>
          ) : (
            <ul className="space-y-2">
              {stats.topPages.map((p) => (
                <li key={p.path} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-mono text-zinc-300 truncate">{p.path}</span>
                  <span className="font-black tabular-nums text-zinc-400">{p.views}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="industrial-border bg-zinc-900/60 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={16} className="text-brand" />
            <h3 className="text-sm font-black uppercase tracking-widest">Sumber Trafik</h3>
          </div>
          {stats.topReferrers.length === 0 ? (
            <p className="text-zinc-500 text-sm font-mono">Belum ada referrer eksternal.</p>
          ) : (
            <ul className="space-y-2">
              {stats.topReferrers.map((r) => (
                <li key={r.referrer} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-mono text-zinc-300 truncate">{r.referrer}</span>
                  <span className="font-black tabular-nums text-zinc-400">{r.views}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
