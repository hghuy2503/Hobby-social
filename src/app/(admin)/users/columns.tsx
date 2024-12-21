import { ColumnDef } from "@tanstack/react-table";

// Định nghĩa kiểu dữ liệu cho user
export type User = {
  id: number;
  displayName: string;
  email: string;
  isAdmin: boolean;
};

// Định nghĩa cột
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "displayName",
    header: "Display Name",
    cell: ({ row }) => <span className="font-medium">{row.getValue("displayName")}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "isAdmin",
    header: "Role",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded ${
          row.getValue("isAdmin") ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"
        }`}
      >
        {row.getValue("isAdmin") ? "Admin" : "User"}
      </span>
    ),
  },
];
