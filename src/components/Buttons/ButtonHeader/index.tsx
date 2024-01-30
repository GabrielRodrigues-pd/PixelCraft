import React from "react";
import Image from "next/image";
import iconBtn from "@/assets/svg/setaBlue.svg";
import styles from "./button.module.scss";

export default function Button() {
  return (
    <a
      className={styles.btn}
      href="https://api.whatsapp.com/send?phone=5583981246429"
      target="_blank"
    >
      Iniciar um projeto <Image className={styles.img} src={iconBtn} alt="" />
    </a>
  );
}
