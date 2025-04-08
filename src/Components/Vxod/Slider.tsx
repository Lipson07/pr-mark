import React from "react";
import { useState, useEffect, useRef } from "react";
import { phon, eye, closeeye, whpng, bphon } from "../../Assets/Vxodas/vxod.js";
import Vxod from "../../Styles/Vxod.module.scss";
const Slider = ({
  sliderClass,
  scrollDirection,
}: {
  sliderClass: string;
  scrollDirection: number;
}) => {
  const images = [whpng, bphon, whpng, bphon, whpng, bphon];
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  const repeatedImages = [...images, ...images];
  const [sliderImages, setSliderImages] = useState(repeatedImages);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 2;
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) {
      console.log(`Slider ${sliderClass} ref is null!`);
      return;
    }
    const scroll = () => {
      slider.scrollTop += scrollSpeed * scrollDirection;
      const overlap = 50;
      if (
        scrollDirection > 0 &&
        slider.scrollTop >= slider.scrollHeight - slider.clientHeight - overlap
      ) {
        slider.scrollTop = overlap;
      } else if (scrollDirection < 0 && slider.scrollTop <= overlap) {
        slider.scrollTop = slider.scrollHeight - slider.clientHeight - overlap;
      }
      const id = requestAnimationFrame(scroll);
      setAnimationFrameId(id);
    };
    const id = requestAnimationFrame(scroll);
    setAnimationFrameId(id);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        console.log(`Animation ${sliderClass} canceled`);
      }
      setAnimationFrameId(null);
    };
  }, [scrollSpeed, scrollDirection]);
  return (
    <div className={sliderClass} ref={sliderRef}>
      {sliderImages.map((image: any, index: any) => {
        return <img key={index} src={image} alt="" />;
      })}
    </div>
  );
};
export default Slider;
