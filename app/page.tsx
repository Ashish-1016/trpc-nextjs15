'use client'

import { toast } from "sonner";

export default function Home() {
  return (
    <div className='h-full w-full bg-orange-400 flex items-center justify-center'>
      Hi home page (orange)
      <button onClick={() => toast.info('Cliceked meeeeee')}>click me</button>
    </div>
  );
}
