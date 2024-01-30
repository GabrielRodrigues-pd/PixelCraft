import React from "react";
import Image from "next/image";
import styles from "./cardRating.module.scss";
import icon from "@/assets/svg/aspas.svg";

interface CardProps {
  title: string;
  disc: string;
  name: string;
  status: string;
  children?: React.ReactNode;
}

export default function CardRating({
  title,
  disc,
  name,
  status,
  children,
}: CardProps) {
  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <p>{disc}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.innerImg}>
          <div className={styles.wrapper}>{children}</div>
          <div>
            <h3>{name}</h3>
            <span>{status}</span>
          </div>
        </div>
        <Image src={icon} alt="" />
      </div>
    </div>
  );
}
