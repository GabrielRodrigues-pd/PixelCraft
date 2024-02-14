import React from "react";
import styles from "./card.module.scss";
import Image, { StaticImageData } from "next/image";
import ButtonCaseCard from "../../Buttons/ButtonCaseCard";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function CardCase({ title, description, image }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <Image
          src={image}
          width={554}
          height={398}
          style={{
            objectFit: "cover",
          }}
          alt=""
          priority
          quality={80}
        />
      </div>
      <div className={styles.card}>
        <div className={styles.infoCard}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.footerCard}>
          <div>
            <span>Ui design</span>
            <span>Desenvolvimento</span>
          </div>
          <ButtonCaseCard title="Ver Case" />
        </div>
      </div>
    </div>
  );
}
