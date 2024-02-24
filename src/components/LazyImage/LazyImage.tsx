import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const LazyImage = ({
  src,
  alt,
  width = 745,
  height = 1040,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => (
  <Image
    draggable={false}
    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(745, 1040))}`}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);

export default LazyImage;
