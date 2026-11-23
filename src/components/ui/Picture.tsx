import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Extra classes for the <img>, e.g. an object-position. */
  imgClassName?: string;
};

/**
 * Responsive image wrapper: a block span carrying the layout classes (size,
 * aspect ratio, transforms), with the image filling it via object-cover and a
 * blurred low-res preview while loading. Lazy-loaded unless `priority`.
 */
export function Picture({ src, alt, className, sizes = "100vw", priority, imgClassName }: Props) {
  return (
    <span className={cn("relative block", className)}>
      <span className="relative block h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={90}
          priority={priority}
          placeholder="blur"
          className={cn("object-cover", imgClassName)}
        />
      </span>
    </span>
  );
}
