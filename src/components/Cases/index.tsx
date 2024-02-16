"use client";

import React from "react";
import styles from "./cases.module.scss";
import ButtonCasesView from "../Buttons/ButtonCasesView";
import CardCase from "../Cards/CardCase";
import imgCard from "@/assets/png/img-card.png";
import { motion } from "framer-motion";
export default function Cases() {
  const caseDatas = [
    {
      id: 1,
      image: imgCard,
      title: "Discovery Channel",
      disc: "O Discovery Channel é um canal de televisão por assinatura dedicado à programação educativa e documental. Através de produções inovadoras e narrativas envolventes, o Discovery Channel busca inspirar a curiosidade e o entendimento sobre os fenômenos e a diversidade da vida no planeta Terra. Seu conteúdo diversificado e educativo o torna um dos canais mais populares e respeitados no campo da televisão documental.",
    },
    {
      id: 2,
      image: imgCard,
      title: "Discovery Channel",
      disc: "O Discovery Channel é um canal de televisão por assinatura dedicado à programação educativa e documental. Através de produções inovadoras e narrativas envolventes, o Discovery Channel busca inspirar a curiosidade e o entendimento sobre os fenômenos e a diversidade da vida no planeta Terra. Seu conteúdo diversificado e educativo o torna um dos canais mais populares e respeitados no campo da televisão documental.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
      id="case"
    >
      <div className={styles.header}>
        <div>
          <span>Our recent Cases</span>
          <h2>
            Conheça os Projetos <br /> que já Desenvolvemos
          </h2>
        </div>
        <p>Designers incríveis, modernos, clear e que realmente se destacam</p>
        <ButtonCasesView title={"Ver todos os Cases"} />
      </div>
      <div className={styles.boxCard}>
        {caseDatas.map((caseData) => (
          <CardCase
            key={caseData.id}
            image={caseData.image}
            title={caseData.title}
            description={caseData.disc}
          />
        ))}
      </div>
    </motion.section>
  );
}
