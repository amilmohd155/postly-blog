import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeProviders from "@/app/theme-provider";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@config/site";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.headerTitle,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
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
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          raleway.className,
          "bg-background text-foreground antialiased",
        )}
      >
        <ThemeProviders>
          <div className="mx-auto flex h-screen max-w-3xl flex-col lg:max-w-7xl">
            <Header />
            {children}
            {/* <Footer /> */}
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
