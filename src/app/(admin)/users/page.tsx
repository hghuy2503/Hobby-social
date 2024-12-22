"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DataTable } from "@/components/data-table";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Quản lý Người dùng</h1>
      <div className="mb-4">
        <Link href="/admin/users/add" className="bg-blue-500 text-white p-2 rounded">
          Thêm Người dùng
        </Link>
      </div>
      <DataTable data={users} />
    </div>
  );
}
