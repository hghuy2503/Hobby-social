import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await validateRequest();

  if (!session?.user) {
    redirect("/login");
  }

  // Kiểm tra quyền Admin
  if (!session.user.isAdmin) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 bg-gray-100">{children}</main>
      </div>
    </SidebarProvider>
  );
}
