import { ReactNode } from "react";
import { MainBodySection } from "@/app/_components/MainBodySection";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-dvh w-full flex flex-col items-center justify-center">
      <MainBodySection>{children}</MainBodySection>
    </main>
  );
};
