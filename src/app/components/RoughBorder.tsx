import { useEffect, useRef } from "react";
import rough from "roughjs";

type RoughBorderProps = {
  width?: number;
  height?: number;
};

export default function RoughBorder({
  width = 100,
  height = 40,
}: RoughBorderProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

useEffect(() => {
  if (!svgRef.current) return;

  const svg = svgRef.current;

  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  const rc = rough.svg(svg);

  const node = rc.rectangle(0, 0, width, height, {
    stroke: "#000",
    strokeWidth: 2,
    roughness: 2,
    fill: "white",
  });

  svg.appendChild(node);
}, [width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
}