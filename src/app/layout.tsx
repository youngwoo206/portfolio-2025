import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Youngwoo | Full Stack Developer",
  description:
    "Youngwoo's portfolio website made using Next.js and Tailwind.css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto_init.variable}>
        <Providers>
          <div className="flex roboto bg-soft-white dark:bg-dark-gray transition-all duration-300">
            <NavBar />
            <div className="w-full overflow-x-auto ">
              <div className="sm:h-[100vh] overflow-auto ">
                <div className="md:max-w-6xl mx-auto">{children}</div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
