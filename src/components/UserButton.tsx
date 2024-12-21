"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import {
  Check,
  LogOutIcon,
  Monitor,
  Moon,
  Sun,
  UserIcon,
  Settings,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { useSession } from "@/app/(main)/SessionProvider";
import { logout } from "@/app/(auth)/actions";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession(); // Lấy thông tin user
  const { theme, setTheme } = useTheme();
  const queryClient = useQueryClient();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex-none rounded-full", className)}>
          <UserAvatar avatarUrl={user.avatarUrl} size={40} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Chào, {user.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Link đến hồ sơ người dùng */}
        <DropdownMenuGroup>
          <Link href={`/users/${user.username}`}>
            <DropdownMenuItem>
              <UserIcon className="mr-2 size-4" />
              Hồ sơ
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Link đến admin dashboard (chỉ hiện nếu user là admin) */}
        {user.isAdmin && (
          <DropdownMenuGroup>
            <Link href="/admindashboard">
              <DropdownMenuItem>
                <Settings className="mr-2 size-4" />
                Admin Dashboard
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        )}
        <DropdownMenuSeparator />

        {/* Chế độ giao diện */}
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 size-4" />
            Sáng
            {theme === "light" && <Check className="ml-2 size-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 size-4" />
            Tối
            {theme === "dark" && <Check className="ml-2 size-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Đăng xuất */}
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              queryClient.clear();
              logout();
            }}
          >
            <LogOutIcon className="mr-2 size-4" />
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
