import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";

import insta from "@/assets/redes/insta.svg";
import iconTop from "@/assets/svg/setaTop.svg";
import logoPixel from "@/assets/logos/logo.svg";
import BackToTopButton from "../Buttons/BackToTopButton";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image src={logoPixel} alt="" />
      <span>PixelCraft | Todos os direitos reservados</span>
      <div>
        <Image src={insta} alt="" />
        <a href="https://www.instagram.com/studio_pixelcraft/" target="_blank">
          @studio_pixelcraft
        </a>
      </div>
      <div>
        <Image src={insta} alt="" />
        <a href="https://www.instagram.com/aeogabriel/" target="_blank">
          aeogabriel
        </a>
      </div>
      <BackToTopButton />
    </footer>
  );
}
