import React from "react";
import styles from "./button.module.scss";
import Image from "next/image";
import seta from "@/assets/svg/setaV2.svg";

interface ButtonProps {
  title: string;
}

export default function ButtonCasesView({ title }: ButtonProps) {
  return (
    <button className={styles.btn}>
      {title} <Image src={seta} alt="" />
    </button>
  );
}
