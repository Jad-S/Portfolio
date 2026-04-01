import { useEffect, useRef } from "react";
import rough from "roughjs";

type RoughBorderProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  roughness?: number;
  bowing?: number;
  seed?: number;
  stroke?: string;
  fill?: string;
};

export default function RoughBorder({
  width = 100,
  height = 40,
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

    // clear svg
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const rc = rough.svg(svg);

    // OUTER BORDER
    const node = rc.rectangle(0, 0, width, height, {
      stroke: stroke,
      strokeWidth: strokeWidth,
      roughness: roughness,
      bowing: bowing,
      fill: fill,
      seed: seed,
    });

    // INNER BORDER (subtle detail)
    const node2 = rc.rectangle(2, 2, width - 4, height - 4, {
      stroke: stroke,
      strokeWidth: strokeWidth * 0.4,
      roughness: roughness + 0.5,
      bowing: bowing * 0.5,
      seed: seed + 1,
    });

    svg.appendChild(node);
    svg.appendChild(node2);

  }, [width, height, strokeWidth, roughness, bowing, seed, stroke, fill]);

  return <svg ref={svgRef} width={width} height={height}     className="absolute inset-0 pointer-events-none" />;
}
