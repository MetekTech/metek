"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ImageGrid() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const newImages = Array.from(
      { length: 30 },
      (_, idx) => `https://picsum.photos/400?random=${idx + 1}`,
    );
    setImages(newImages);
  }, []);

  return images.map((_, index) => (
    <div
      key={index}
      className="aspect-square animate-fade-in opacity-0"
      style={{
        animationDelay: `${(index + 1) * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <Image
        src={images[index]}
        alt=""
        className="h-full w-full object-cover"
        height={400}
        width={400}
      />
    </div>
  ));
}
