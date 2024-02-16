"use client";

import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";
import HeadComponent from "../HeadComponent";
import CardDeveloper from "../Cards/CardDeveloper";

import ImgD from "../../assets/png/IconDiogo.png";
import ImgG from "../../assets/png/IconGabriel.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
      id="sobre"
    >
      <HeadComponent
        title="Nós somos a PixelCraft"
        subTitle="juntos, buscamos inovação e excelência"
      />

      <div className={styles.body}>
        <CardDeveloper
          altImgDev={"Foto de Diogo Alvez, Sócio Fundador."}
          imgDev={ImgD}
          linkGithub="https://github.com/Diogoalves2"
          linkDribble="https://dribbble.com/alves10"
          linkInsta="https://www.instagram.com/studio_pixelcraft/"
          nameDev={"Diogo Alves"}
        />

        <CardDeveloper
          altImgDev={"Foto de Gabriel Rodrigues, Sócio Fundador."}
          nameDev={"Gabriel Rodrigues"}
          imgDev={ImgG}
          linkInsta="https://www.instagram.com/aeogabriel/"
          linkGithub="https://github.com/GabrielRodrigues-pd"
          logo={true}
          brand={true}
        />
      </div>
    </motion.section>
  );
}
