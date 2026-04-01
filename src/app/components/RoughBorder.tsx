import { useEffect, useRef } from "react";
import rough from "roughjs";

type RoughBorderProps = {
  width: number;
  height: number;
  smWidth?: number;
  smHeight?: number;
  mdWidth?: number;
  mdHeight?: number;
  lgWidth?: number;
  lgHeight?: number;
  strokeWidth?: number;
  roughness?: number;
  bowing?: number;
  seed?: number;
  stroke?: string;
  fill?: string;
};

export default function RoughBorder({
  width,
  height,
  smWidth,
  smHeight,
  mdWidth,
  mdHeight,
  lgWidth,
  lgHeight,
  strokeWidth = 2,
  roughness = 3.5,
  bowing = 2,
  seed = 123,
  stroke = "#000",
  fill = "white",
}: RoughBorderProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;

    // RESPONSIVE WIDTH/HEIGHT LOGIC
    const container = svg.parentElement;
    if (!container) return;

    // Detect screen size en kies juiste dimensies
    const screenWidth = window.innerWidth;
    
    let finalWidth = width;
    let finalHeight = height;

    if (screenWidth >= 1024) { // lg
      finalWidth = lgWidth || mdWidth || smWidth || width;
      finalHeight = lgHeight || mdHeight || smHeight || height;
    } else if (screenWidth >= 768) { // md
      finalWidth = mdWidth || smWidth || width;
      finalHeight = mdHeight || smHeight || height;
    } else if (screenWidth >= 640) { // sm
      finalWidth = smWidth || width;
      finalHeight = smHeight || height;
    }

    // Update SVG dimensions
    svg.setAttribute('width', finalWidth.toString());
    svg.setAttribute('height', finalHeight.toString());

    // clear svg
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const rc = rough.svg(svg);

    // OUTER BORDER - Responsive stroke width
    const finalStrokeWidth = strokeWidth * (finalWidth / 400); // Scale based on base 400px
    const node = rc.rectangle(0, 0, finalWidth, finalHeight, {
      stroke: stroke,
      strokeWidth: Math.max(1, finalStrokeWidth),
      roughness: roughness,
      bowing: bowing,
      fill: fill,
      seed: seed,
    });

    // INNER BORDER (subtle detail) - Responsive
    const innerStrokeWidth = Math.max(0.5, finalStrokeWidth * 0.4);
    const node2 = rc.rectangle(
      innerStrokeWidth, 
      innerStrokeWidth, 
      finalWidth - (innerStrokeWidth * 2), 
      finalHeight - (innerStrokeWidth * 2), 
      {
        stroke: stroke,
        strokeWidth: innerStrokeWidth,
        roughness: roughness + 0.5,
        bowing: bowing * 0.5,
        seed: seed + 1,
      }
    );

    svg.appendChild(node);
    svg.appendChild(node2);
  }, [
    width, height, smWidth, smHeight, mdWidth, mdHeight, lgWidth, lgHeight,
    strokeWidth, roughness, bowing, seed, stroke, fill
  ]);

  return (
    <svg 
      ref={svgRef} 
      className="absolute inset-0 pointer-events-none w-full h-full"
      preserveAspectRatio="none"
    />
  );
}