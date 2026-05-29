import { loadContent, loadInbox } from "@/lib/content";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [content, inbox] = await Promise.all([loadContent(), loadInbox()]);
  return <AdminDashboard initialContent={content} initialInbox={inbox} />;
}
