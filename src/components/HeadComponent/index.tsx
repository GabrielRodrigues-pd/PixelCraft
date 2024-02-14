import React from "react";
import Image from "next/image";
import styles from "./headComp.module.scss";
import star from "@/assets/svg/star.svg";

interface HeadProps {
  title: string;
  subTitle: string;
}

export default function HeadComponent({ title, subTitle }: HeadProps) {
  return (
    <div className={styles.head}>
      <div>
        <Image src={star} width={20} height={20} alt="" />
        <p>{subTitle}</p>
      </div>

      <h2>
        {title}
        <span>.</span>
      </h2>
    </div>
  );
}
