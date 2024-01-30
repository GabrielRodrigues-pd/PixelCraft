"use client";

import { useEffect, useState } from "react";
import styles from "./button.module.scss";
import iconTop from "@/assets/svg/setaTop.svg";
import Image from "next/image";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <Image src={iconTop} alt="" />

      <button
        className={`${styles.backToTopButton} ${
          isVisible ? styles.visible : ""
        }`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        Voltar ao topo
      </button>
    </div>
  );
}
