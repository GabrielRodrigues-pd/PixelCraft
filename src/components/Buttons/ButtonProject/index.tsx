import React from "react";
import Image from "next/image";
import Icon from "@/assets/svg/setaWhite.svg";
import styles from "./button.module.scss";

interface ButtonProps {
  title: string;
}

export default function ButtonProject({ title }: ButtonProps) {
  return (
    <a
      className={styles.btn}
      href="https://api.whatsapp.com/send?phone=5583981246429"
      target="_blank"
    >
      {title} <Image src={Icon} alt="Seta do button" />
    </a>
  );
}
