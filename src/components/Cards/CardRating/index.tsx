import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./cardRating.module.scss";
import icon from "@/assets/svg/aspas.svg";
import Icon1 from "@/assets/png/imgIcon.png";
interface cardPros {
  title: string;
  status: string;
  name: string;
  disc: string;
  imgSrc: StaticImageData;
}

export default function CardRating({
  title,
  status,
  name,
  disc,
  imgSrc,
}: cardPros) {
  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <p>{disc}</p>
      </div>

      <div className={styles.info}>
        <div className={styles.innerImg}>
          <div className={styles.wrapper}>
            <Image
              src={imgSrc}
              style={{ objectFit: "cover", borderRadius: "50%", width: "100%" }}
              alt=""
            />
          </div>
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
