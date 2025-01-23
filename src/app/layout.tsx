import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My App",
  description: "A Next.js App using TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between p-10">
          <Link href="/">
            <img src="/images/logo.svg" width={173} className="h-12"></img>
          </Link>
          <nav className="flex space-x-12 items-center">
            <Link
              href="/about"
              className="transition-transform duration-200 transform hover:scale-105 font-normal text-gray-200 hover:text-gray-100 text-lg"
            >
              About us
            </Link>
            <Link href="/services" className="transition-transform duration-200 transform hover:scale-105 font-normal text-gray-200 hover:text-gray-100 text-lg">
            Services
            </Link>
            <Link
              href="/whyus"
              className="transition-transform duration-200 transform hover:scale-105 font-normal text-gray-200 hover:text-gray-100 text-lg"
            >
              Why DevOptima
            </Link>
          </nav>
          <button className="flex items-center rounded-full leading-4 text-base font-semibold px-9 h-12 bg-[#101333] border border-[#243BB9] text-white hover:bg-[#243BB980] hover:border-[#3F57DA]">
            Get started
          </button>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
