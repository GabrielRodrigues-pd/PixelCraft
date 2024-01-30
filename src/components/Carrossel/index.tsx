import React from "react";
import Image from "next/image";
import icon from "@/assets/svg/asteri.svg";
import styles from "./carrossel.module.scss";

export default function Carrossel() {
  return (
    <div className={styles.container}>
      <p>Web Developer</p>
      <Image src={icon} alt="1" />
      <p>UI/UX Design</p>
      <Image src={icon} alt="1" />
      <p>Ecommerce</p>
      <Image src={icon} alt="1" />
      <p>Landingpages</p>
      <Image src={icon} alt="1" />
      <p>Lançamentos</p>
    </div>
  );
}
