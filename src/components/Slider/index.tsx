import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { CSSProperties, useLayoutEffect } from "react";
import { styled } from "@/styles/stitches.config";

const SliderContainer = styled("div", {
  overflow: "hidden",
  position: "relative",
  height: "200px",
  width: "100%",
});

const Slide = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Indicator = styled("button", {
  border: 0,
  background: "transparent",
  cursor: "pointer",
  margin: "0 5px",
  outline: "none",
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$blue",
  },
  "&:hover": {
    opacity: 0.5,
  },
});

interface SliderProps {
  children: React.ReactNode;
}

export function Slider({ children }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesCount = React.Children.count(children);

  const springProps = useSpring({
    config: { duration: 500 },
    loop: true,
    to: [
      { transform: `translateX(-${currentIndex * 100}%)` },
      { transform: `translateX(-${currentIndex * 100}%)` },
    ],
  });

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  useLayoutEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      sliderRef.current.offsetWidth;
      sliderRef.current.style.transition = "";
    }
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === slidesCount - 1) {
      const timer = setTimeout(() => {
        goToSlide(0);
      }, 3000);

      return () => clearTimeout(timer);
    } else if (currentIndex === -1) {
      const timer = setTimeout(() => {
        goToSlide(slidesCount - 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, goToSlide, slidesCount]);

  return (
    <>
      <SliderContainer ref={sliderRef}>
        <animated.div style={springProps}>{children}</animated.div>
      </SliderContainer>
      <div>
        {Array.from({ length: slidesCount }, (_, i) => i).map((index) => (
          <Indicator
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
