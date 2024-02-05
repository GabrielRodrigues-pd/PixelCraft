"use client";

import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import iconMouse from "@/assets/svg/mouser.svg";

import iconFog from "@/assets/svg/foguete.svg";
import ButtonProject from "../Buttons/ButtonProject";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.info}
      >
        <div className={styles.subtitle}>
          <Image src={iconFog} alt="" />
          <p>Incredible design, innovative strategies, success</p>
        </div>
        <h1>
          Design<span className={styles.ponto}>.</span> <br />
          Development<span className={styles.ponto}>.</span>
          <br />
          knowledge<span className={styles.ponto}>.</span>
        </h1>
        <p className={styles.disc}>
          Potencializamos o sucesso online dos nossos clientes por meio de uma
          combinação única de criatividade e expertise.
        </p>
        <ButtonProject title="Iniciar um projeto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.number}
      >
        <p className={styles.title}>Nossos números</p>
        <div className={styles.boxInfo}>
          <h3>
            <span>+</span>5 anos
          </h3>
          <p className={styles.parag}>
            Inovando e levando aos nossos clientes a melhor experiência.
          </p>
        </div>
        <div className={styles.boxInfo}>
          <h3>
            <span>+</span>20 Projetos
          </h3>
          <p className={styles.parag}>
            Não apenas entregamos projetos, mas soluções eficientes.
          </p>
        </div>
        <div className={styles.boxInfo}>
          <h3>
            <span>+</span>100 clientes
          </h3>
          <p className={styles.parag}>
            Clientes satisfeitos e felizes com o seu posicionamento.
          </p>
        </div>
        <div className={styles.scroll}>
          <p>Scroll Down</p>
          <Image src={iconMouse} alt="" />
        </div>
      </motion.div>
    </div>
  );
}
