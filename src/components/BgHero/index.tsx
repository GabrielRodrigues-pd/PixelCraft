import React, { ReactNode } from "react";
import styles from "./bg.module.scss";
import Image from "next/image";

import bg from "@/assets/png/bg-hero.png";

export default function BgHero({ children }: { children: ReactNode }) {
  return (
    <div className={styles.bghero}>
      <Image
        src={bg}
        alt="Imagem de fundo da home"
        fill={true}
        quality={100}
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
          zIndex: "-99",
        }}
      />
      {children}
    </div>
  );
}
