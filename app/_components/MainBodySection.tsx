'use client';

import { Loader } from "lucide-react";
import { AppSidebar } from "@/app/_components/AppSidebar";
import { ReactNode } from "react";
import { useIsMobile } from "@/utils/hooks/use-mobile";
import { Header } from "@/app/_components/Header";

export const MainBodySection = ({ children }: { children: ReactNode }) => {

  // const isMobile = useIsMobile();

  return (
    <section className="w-full flex h-full overflow-clip">
      <AppSidebar />

      <div className='h-full w-full'>
        <Header />
        <div className='h-full w-full px-4 py-8 overflow-auto'>
          {Array.from([1, 2,4,5,6,7,8, 10, 11, 12, 13, 14 ]).map((child, index) => (
            <div className='h-[800px] mb-4 w-[80%] bg-green-300' key={index}>
              {child}
            </div>
          ))}
        </div>

      </div>

      {/*{isMobile === undefined ? (*/}
      {/*    <div className='h-full w-full flex flex-col items-center justify-center'>*/}
      {/*      <Loader className='animate-spin' size={35}/>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*  :*/}
      {/*  (*/}
      {/*    <>*/}
      {/*      <AppSidebar  />*/}
      {/*      <main className='flex flex-col items-center justify-center h-full w-full overflow-auto'>*/}
      {/*        {Array.from([1, 2,4,5,6,7,8]).map((child, index) => (*/}
      {/*          <div className='h-[400px] w-[200px] bg-green-300' key={index}>*/}
      {/*            {child}*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </main>*/}
      {/*    </>*/}
      {/*  )*/}
      {/*}*/}

    </section>
  )
}