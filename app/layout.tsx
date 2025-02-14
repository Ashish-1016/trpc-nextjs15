import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/utils/providers/TrpcProviders";
import { MainLayout } from "@/app/main-layout";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/utils/providers/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRPC Nextjs 15",
  description: "Nice App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${poppins.variable} `}>
        <TRPCProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <ThemeProvider
              disableTransitionOnChange={true}
              defaultTheme="system"
            >
              <MainLayout>{children}</MainLayout>
            </ThemeProvider>
            <Toaster />
          </SidebarProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
