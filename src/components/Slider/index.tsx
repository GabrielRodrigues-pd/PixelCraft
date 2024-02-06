"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./slider.module.scss";
import CardRating from "../Cards/CardRating";
import Image, { StaticImageData } from "next/image";
import Icon1 from "@/assets/png/imgIcon.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperProps } from "./SwiperProps";
import icon from "@/assets/svg/aspas.svg";

const Slider: React.FC<SwiperProps> = ({ slides }) => {
  const [slidePerView, setSlidePerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1110) {
        setSlidePerView(2);
      }
      if (window.innerWidth < 800) {
        setSlidePerView(1);
      }
      if (window.innerWidth > 1110) {
        setSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={46}
        slidesPerView={slidePerView}
        navigation={true}
        pagination={{ dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        className={styles.slider}
        // onSwiper={}
        // onSlideChange={() => }
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.box}>
              <div>
                <h2>{slide.title}</h2>
                <p>{slide.disc}</p>
              </div>

              <div className={styles.info}>
                <div className={styles.innerImg}>
                  <div className={styles.wrapper}>
                    <Image
                      src={Icon1}
                      fill={true}
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                      alt=""
                    />
                  </div>
                  <div className={styles.user}>
                    <h3>{slide.name}</h3>
                    <span>{slide.status}</span>
                  </div>
                </div>
                <Image src={icon} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
