import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Trang quản lý</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="p-4">
          <h1 className="mb-4 text-2xl font-bold">Trang quản lý</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link
              href="/admin/users"
              className="rounded bg-blue-500 p-4 text-white shadow hover:bg-blue-600"
            >
              Quản lý Người dùng
            </Link>
            <Link
              href="/admin/posts"
              className="rounded bg-green-500 p-4 text-white shadow hover:bg-green-600"
            >
              Quản lý Bài viết
            </Link>
            <Link
              href="/admin/comments"
              className="rounded bg-yellow-500 p-4 text-white shadow hover:bg-yellow-600"
            >
              Quản lý Bình luận
            </Link>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
