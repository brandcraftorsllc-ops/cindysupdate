import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Mirrors the reference site's responsive image wrapper: an inline-block span
 * carrying the layout classes, with the image filling it via object-cover and a
 * blurred low-res preview while loading.
 */
export function Picture({ src, alt, className, sizes = "100vw", priority }: Props) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative block h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={90}
          priority={priority}
          placeholder="blur"
          className="object-cover"
        />
      </span>
    </span>
  );
}
