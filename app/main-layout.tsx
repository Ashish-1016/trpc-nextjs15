import { ReactNode } from "react";
import { MainBodySection } from "@/app/_components/MainBodySection";
import { Header } from "@/app/_components/Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center">

      {/*<Header />*/}

      <MainBodySection>
        {children}
      </MainBodySection>

    </div>
  )
}