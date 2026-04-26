import { Metadata } from "next";
import { outfit, playfair } from "../(with-nav)/layout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Voyager AI - Sign up or login",
  description: "Sign up or login to your account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="h-full font-sans w-full">
        <main className="flex justify-between items-center size-full">
          <aside className="lg:basis-1/2 basis-0 h-full relative overflow-hidden">
            <Image src="/aside-auth.svg" alt="" fill className="object-cover" />
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
