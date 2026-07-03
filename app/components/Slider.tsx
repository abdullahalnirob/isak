"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import slide1 from "../images/sliderImg/slider1.png";
import slide2 from "../images/sliderImg/slide2.png";
import slide3 from "../images/sliderImg/slide3.png";
import slide4 from "../images/sliderImg/slide4.png";

const images = [slide1, slide2, slide3, slide4];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
};

export default Slider;
