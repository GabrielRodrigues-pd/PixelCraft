"use client";

import React from "react";
import Image from "next/image";

import styles from "./header.module.scss";
import iconLogo from "@/assets/logos/logo.svg";
import Button from "@/components/Buttons/ButtonHeader";
import { motion } from "framer-motion";

import { scrollToSection } from "@/utils/scroll";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.header}
    >
      <Image src={iconLogo} alt="logo" />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li onClick={() => scrollToSection("case")}>Cases</li>

          <li onClick={() => scrollToSection("sobre")}>Sobre nós</li>

          <li onClick={() => scrollToSection("skills")}>Skills</li>
        </ul>
      </nav>
      <Button />
    </motion.header>
  );
}
