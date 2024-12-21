import { prisma } from "@/lib/prisma"; // Đảm bảo đã cấu hình Prisma
import { DataTable } from "./data-table";

export async function getServerSideProps() {
  // Lấy dữ liệu từ Prisma
  const users = await prisma.user.findMany({
    select: {
      id: true,
      displayName: true,
      email: true,
      isAdmin: true,
    },
  });

  return {
    props: {
      users,
    },
  };
}

export default function Page({ users }: { users: any[] }) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">User Table</h1>
      <DataTable data={users} />
    </div>
  );
}
