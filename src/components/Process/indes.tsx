import React from "react";
import Image from "next/image";
import styles from "./process.module.scss";
import HeadComponent from "../HeadComponent";
import CardProcess from "../Cards/CardProcess";

import seta from "@/assets/svg/setaWhite.svg";

export default function Process() {
  const cardDatas = [
    {
      number: "01",
      title: "Discovery Channel",
      description: "O inicio de tudo, o ponto de start de todo projeto.",
    },
    {
      number: "02",
      title: "Ideação",
      description: "O nosso cliente apresenta a sua ideia de negócio.",
    },
    {
      number: "03",
      title: "Briefing",
      description: "Coletamos os dados necessários para implementação.",
    },
    {
      number: "04",
      title: "Wireframe",
      description: "O projeto começa a ganhar formas e conceitos.",
    },
    {
      number: "05",
      title: "UI Design",
      description:
        "O projeto ganha cores, vida e está pronto para implementação.",
    },
    {
      number: "06",
      title: "Desenvolvimento",
      description:
        "Nessa etapa codamos o projeto, utilizando as melhores práticas.",
    },
    {
      number: "07",
      title: "Validação e Entrega",
      description:
        "Nessa etapa validamos com o cliente todo projeto e entrega.",
    },
  ];

  return (
    <div className={styles.container} id="skills">
      <HeadComponent
        title="Creative Process"
        subTitle="conheça nosso processo criativo"
      />
      <div className={styles.boxCard}>
        {cardDatas.map((cardData) => (
          <CardProcess
            key={cardData.number}
            number={cardData.number}
            title={cardData.title}
            disc={cardData.description}
          />
        ))}
        <div className={styles.btn}>
          <a
            className={styles.button}
            href="https://api.whatsapp.com/send?phone=5583981246429"
            target="_blank"
          >
            Vamos iniciar um Projeto?
          </a>
          <Image src={seta} alt="" />
        </div>
      </div>
    </div>
  );
}
