"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUserForm() {
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    email: "",
    passwordHash: "",
    isAdmin: false,
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      router.push("/admin/users");
    } else {
      console.error("Failed to add user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Tên đăng nhập</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Tên hiển thị</label>
        <input
          type="text"
          value={formData.displayName}
          onChange={(e) =>
            setFormData({ ...formData, displayName: e.target.value })
          }
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          value={formData.passwordHash}
          onChange={(e) =>
            setFormData({ ...formData, passwordHash: e.target.value })
          }
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Admin</label>
        <input
          type="checkbox"
          checked={formData.isAdmin}
          onChange={(e) =>
            setFormData({ ...formData, isAdmin: e.target.checked })
          }
        />
      </div>
      <button type="submit" className="rounded bg-green-500 p-2 text-white">
        Lưu
      </button>
    </form>
  );
}
