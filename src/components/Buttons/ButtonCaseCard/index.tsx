import React from "react";
import styles from "./btn.module.scss";
import icon from "@/assets/svg/setaGray.svg";
import Image from "next/image";
interface ButtonProps {
  title: string;
}

export default function ButtonCaseCard({ title }: ButtonProps) {
  return (
    <button className={styles.btn}>
      {title} <Image src={icon} alt="" />
    </button>
  );
}
