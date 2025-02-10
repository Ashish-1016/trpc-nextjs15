import { Loader } from "lucide-react";

export default function MainLayoutLoadingPage() {

  return (
    <div className="h-full w-full flex flex-col items-center justify-center ">
      <header className='h-[60px] sticky top-0 w-full bg-sky-950 text-white'>
        MOTUPLAN
      </header>
      <section className="w-full flex h-[calc(100%-60px)] overflow-x-clip overflow-y-hidden bg-teal-300">

        <main className='flex flex-col items-center justify-center h-full w-full overflow-auto'>
          <Loader className='animate-spin' size={35}/>
        </main>
      </section>

    </div>
  )
}