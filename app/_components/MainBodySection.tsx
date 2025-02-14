"use client";

import { AppSidebar } from "@/app/_components/AppSidebar";
import { ReactNode } from "react";
import { Header } from "@/app/_components/Header";
import { Loader } from "lucide-react";
import { useIsMobile } from "@/utils/hooks/use-mobile";

export const MainBodySection = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <section className="w-full flex flex-col h-full">
      <Header />
      {isMobile === undefined ? (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Loader className="animate-spin" size={35} />
        </div>
      ) : (
        <>
          <main className="flex flex-col items-center justify-center h-full w-full overflow-auto">
            {children}
          </main>
        </>
      )}
    </section>
  );
};
