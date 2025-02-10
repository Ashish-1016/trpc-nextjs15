import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <header className='h-[60px] font-inter flex justify-start gap-2 items-center sticky top-0 w-full bg-sky-950 text-white'>
      <SidebarTrigger className='md:hidden' />
      <span className='text-2xl font-bold'>MOTUPLAN</span>
    </header>
  )
}