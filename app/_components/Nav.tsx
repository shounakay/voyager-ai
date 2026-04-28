import { LogIn, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-neutral w-full">
      <div className="flex gap-2 items-center">
        {/* <Link href="/">
          <Image src="/logo.svg" alt="Voyager AI" width={100} height={100} />
        </Link> */}
        <h1 className="text-xl font-semibold text-primary">Voyager</h1>
      </div>
      <div className="flex gap-4 items-center">
        <button className="bg-primary text-white p-2 cursor-pointer flex items-center gap-2 rounded-md hover:bg-primary/80 transition-colors">
          <LogIn size={16} />
          <span>Login</span>
        </button>
        <Link href="/signup">
          <button className="bg-white text-primary p-2 hover:scale-105 t cursor-pointer rounded-md flex gap-2 items-center hover:bg-secondary hover:shadow-2xl border border-primary transition-all">
            <UserRoundPlus size={16} />
            <span>Sign up</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};
