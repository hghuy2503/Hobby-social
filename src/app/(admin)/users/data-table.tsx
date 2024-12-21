import { User } from "@prisma/client";
import { columns } from "./columns"; // Import cột đã định nghĩa
import { useState } from "react";

export function DataTable({ data }: { data: User[] }) {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
    setFilteredData(
      data.filter((user) =>
        user.displayName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={filter}
          onChange={handleSearch}
          className="p-2 border rounded w-full"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessorKey} className="p-2 border bg-gray-100">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-200 transition-colors duration-150"
            >
              {columns.map((column) => (
                <td key={column.accessorKey} className="p-2">
                  {column.cell ? column.cell({ row: user }) : user[column.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
