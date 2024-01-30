import React from "react";
import Image from "next/image";
import star from "../../assets/svg/star.svg";
import styles from "./tag.module.scss";

interface TagProps {
  title: string;
}

export default function TagLine({ title }: TagProps) {
  return (
    <div className={styles.container}>
      <Image src={star} alt="" />
      {title}
    </div>
  );
}
