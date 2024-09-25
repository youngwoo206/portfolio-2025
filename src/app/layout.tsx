import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";

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
      <body className={`antialiased`}>
        <Providers>
          <div className="flex">
            <NavBar />
            <div className="w-full overflow-x-auto">
              <div className="sm:h-[100vh] overflow-auto ">
                {/* <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                  <div className="w-full md:max-w-6xl mx-auto">{children}</div>
                </div> */}
                <div className="md:max-w-6xl mx-auto">{children}</div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
