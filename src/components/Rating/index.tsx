import React from "react";
import Image from "next/image";
import styles from "./rating.module.scss";
import HeadComponent from "../HeadComponent";
import Slider from "../Slider";

export default function Rating() {
  return (
    <div className={styles.container}>
      <HeadComponent
        title="O que dizem nossos Clientese e Parceiros"
        subTitle="o motivo do nosso sucesso"
      />
      <Slider />
    </div>
  );
}
