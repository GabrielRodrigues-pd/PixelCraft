"use client";

import React from "react";
import Image from "next/image";
import styles from "./expertise.module.scss";
import icon1 from "@/assets/svg/icon1.svg";
import icon2 from "@/assets/svg/icon2.svg";
import icon3 from "@/assets/svg/icon3.svg";

import css from "@/assets/technology/css.svg";
import figma from "@/assets/technology/figma.svg";
import html from "@/assets/technology/html.svg";
import js from "@/assets/technology/js.svg";
import next from "@/assets/technology/next.svg";
import react from "@/assets/technology/react.svg";
import sass from "@/assets/technology/sass.svg";
import wordpress from "@/assets/technology/wordpress.svg";

import { motion } from "framer-motion";

export default function Expertise() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h2>Our Expertise</h2>
      <div className={styles.boxCard}>
        <div className={styles.card}>
          <div>
            <Image src={icon1} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={icon2} alt="" />
            <h3>Sites e Landingpages</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={icon3} alt="" />
            <h3>E-commerce</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tecnology}>
        <Image src={css} alt="" />
        <Image src={figma} alt="" />
        <Image src={html} alt="" />
        <Image src={js} alt="" />
        <Image src={next} alt="" />
        <Image src={react} alt="" />
        <Image src={sass} alt="" />
        <Image src={wordpress} alt="" />
      </div>
    </motion.section>
  );
}
