import React from "react";
import { useState } from "react";
import { css } from "@stitches/react";

const carouselStyles = css({
  display: "flex",
  gap: "4.8rem",
  marginTop: "8rem",
  overflowX: "scroll",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const carouselCardStyles = css({
  scrollSnapAlign: "start",
  flexShrink: 0,
});

export function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const container = event.currentTarget;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollPosition = container.scrollLeft;

    if (scrollWidth - clientWidth === scrollPosition) {
      setCurrentIndex(children.length - 1);
    } else if (scrollPosition === 0) {
      setCurrentIndex(0);
    } else {
      const index = Math.round(scrollPosition / clientWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <div className={carouselStyles()} onScroll={handleScroll}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={carouselCardStyles()}
          style={{
            scrollSnapAlign: index === currentIndex ? "start" : "none",
            transform: `translateX(${-currentIndex * 100}%)`,
            transitionDuration: "0.5s",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
