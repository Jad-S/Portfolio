import { useRef, useEffect, useState } from "react";
import RoughBorder from "./RoughBorder";

export function RoughBox({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const resize = () => {
      setSize({
        w: el.offsetWidth,
        h: el.offsetHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={ref} className="relative">
      
      {/* WIGGLY BORDER */}
      <div className="absolute inset-0 pointer-events-none">
        {size.w > 0 && size.h > 0 && (
<RoughBorder
  width={size.w}
  height={size.h}
  strokeWidth={1.5}
  roughness={2.5}
/>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 bg-white">
        {children}
      </div>

    </div>
  );
}