import { loadContent, loadInbox } from "@/lib/content";
import { getDashboardStats } from "@/lib/analytics";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [content, inbox] = await Promise.all([loadContent(), loadInbox()]);
  const stats = getDashboardStats();
  return (
    <AdminDashboard initialContent={content} initialInbox={inbox} initialStats={stats} />
  );
}
