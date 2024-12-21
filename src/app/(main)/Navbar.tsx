import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold">
          <Image
            src="/LOGO2.png" 
            alt="Logo"
            width={100}
            height={100} 
            className="rounded-full" 
          />
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
