"use client";

import React from "react";
import styles from "./rating.module.scss";
import HeadComponent from "../HeadComponent";
import Slider from "../Slider";
import dados from "./data.json";

import { motion } from "framer-motion";

export default function Rating() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <HeadComponent
        title="O que dizem nossos Clientese e Parceiros"
        subTitle="o motivo do nosso sucesso"
      />
      <Slider slides={dados} />
    </motion.section>
  );
}
