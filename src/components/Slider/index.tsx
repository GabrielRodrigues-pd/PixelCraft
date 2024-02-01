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

export default function Slider() {
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
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={}
        // onSlideChange={() => }
      >
        <SwiperSlide>
          <CardRating
            title="Card 0"
            status="Clínica Odontológica"
            name="Max Silva"
            disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
            imgSrc={Icon1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardRating
            title="Card 1"
            status="Clínica Odontológica"
            name="Max Silva"
            disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
            imgSrc={Icon1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardRating
            title="Card 2"
            status="Clínica Odontológica"
            name="Max Silva"
            disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
            imgSrc={Icon1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardRating
            title="Card 3"
            status="Clínica Odontológica"
            name="Max Silva"
            disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
            imgSrc={Icon1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardRating
            title="Card 3"
            status="Clínica Odontológica"
            name="Max Silva"
            disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
            imgSrc={Icon1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardRating
            title="Card 3"
            status="Clínica Odontológica"
            name="Max Silva"
            disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
            imgSrc={Icon1}
          />
        </SwiperSlide>
        {/* <div className={`${styles.container}`}>
        <CardRating
          title="UI Design & WebSite"
          status="Clínica Odontológica"
          name="Max Silva"
          disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
          imgSrc={Icon1}
        />
        <CardRating
          title="UI Design & WebSite"
          status="Clínica Odontológica"
          name="Max Silva"
          disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
          imgSrc={Icon1}
        />
        <CardRating
          title="UI Design & WebSite"
          status="Clínica Odontológica"
          name="Max Silva"
          disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.”"
          imgSrc={Icon1}
        />
      </div> */}
      </Swiper>
    </div>
  );
}
