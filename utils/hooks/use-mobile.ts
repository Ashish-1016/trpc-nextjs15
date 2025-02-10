'use client';

import { useEffect, useMemo, useState } from "react";

export type TIsMobileProps = boolean | undefined;
const MOBILE_WIDTH_THRESHOLD = 768;

// use below hook to access the window dimensions directly with custom width prop
export const useIsMobile = (customWidth?: number): boolean | undefined => {
  const [isMobile, setIsMobile] = useState<TIsMobileProps>(undefined);
  useEffect(() => {
    function handleResize(): void {
      setIsMobile(
        window.innerWidth <= (customWidth ?? MOBILE_WIDTH_THRESHOLD),
      );
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  },
    [customWidth]
  );

  return useMemo(() => isMobile, [isMobile]);
};