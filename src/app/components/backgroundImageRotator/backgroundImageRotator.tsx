"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Image = {
  src: string;
  alt: string;
};

interface BackgroundImageRotatorProps {
  images: Image[];
  intervalTime: number;
  className?: string;
}

export default function BackgroundImageRotator({
  images,
  intervalTime,
  className,
}: BackgroundImageRotatorProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return (
    <Image
      src={currentImage.src}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      alt={currentImage.alt}
      className={className}
    />
  );
}
