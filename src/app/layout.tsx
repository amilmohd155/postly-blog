import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeProviders from "@/app/theme-provider";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.headerTitle,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  // openGraph: {
  //   type: "article",
  // },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.VERCEL_URL);

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "bg-primary-light text-slate-950 antialiased dark:bg-primary-dark dark:text-white",
        )}
      >
        <ThemeProviders>
          <div className="mx-auto flex min-h-screen max-w-3xl flex-col xl:max-w-5xl xl:px-0">
            <Header />
            <main className="max-h-full flex-1 overflow-hidden md:px-3 md:pb-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
