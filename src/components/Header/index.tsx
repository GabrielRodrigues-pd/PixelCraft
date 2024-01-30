import React from "react";
import Image from "next/image";

import styles from "./header.module.scss";
import iconLogo from "@/assets/logos/logo.svg";
import Button from "@/components/Buttons/ButtonHeader";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={iconLogo} alt="logo" />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <a href="#">Cases</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
        </ul>
      </nav>
      <Button />
    </header>
  );
}
