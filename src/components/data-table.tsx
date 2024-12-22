import { useState } from "react";

export function DataTable({ data }: { data: { id: string; displayName: string; email: string; isAdmin: boolean }[] }) {
    const [filter, setFilter] = useState("");
  
    const filteredData = data.filter((user) =>
      user.displayName.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div className="p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border bg-gray-100">ID</th>
              <th className="p-2 border bg-gray-100">Name</th>
              <th className="p-2 border bg-gray-100">Email</th>
              <th className="p-2 border bg-gray-100">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-200">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.displayName}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.isAdmin ? "Admin" : "User"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  