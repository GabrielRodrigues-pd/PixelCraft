"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./card.module.scss";
import TagLine from "../../TagLine";

import iconX from "@/assets/svg/x.svg";
import LogoIcon from "@/assets/logos/logoSimp1.svg";

import beh from "@/assets/redes/beh.svg";
import dribb from "@/assets/redes/dribb.svg";
import github from "@/assets/redes/github.svg";
import insta from "@/assets/redes/insta.svg";

interface CardDevProps {
  imgDev: StaticImageData;
  nameDev: string;
  altImgDev: string;
  logo?: boolean;
  brand?: boolean;
  linkInsta?: string;
  linkGithub?: string;
  linkBehance?: string;
  linkDribble?: string;
}

export default function CardDeveloper({
  imgDev,
  nameDev,
  altImgDev,
  logo = false,
  brand = false,
  linkInsta,
  linkGithub,
  linkBehance,
  linkDribble,
}: CardDevProps) {
  return (
    <div className={styles.cardTop}>
      {brand ? (
        <div className={styles.ourBrand}>
          <div>
            <div className={styles.boxLogo}>
              <Image src={LogoIcon} alt="" />
            </div>
            <h2>Nossa marca</h2>
          </div>
          <p>
            Projetos <span>que impressionam, experiências que</span> cativam!
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.boxWrap}>
        {logo ? (
          <div className={styles.x}>
            <Image width={26} height={26} src={iconX} alt="" />
          </div>
        ) : (
          <></>
        )}

        <Image
          src={imgDev}
          width={396}
          height={505}
          quality={80}
          priority
          style={{
            objectFit: "cover",
          }}
          alt={altImgDev}
        />
      </div>

      <div className={styles.infoCard}>
        <TagLine title="UI Designer | frontend developer" />
        <h3>{nameDev}</h3>
        <p>
          Graduado em ciências da computação, pela universidade Estadual da
          Paraíba - UEPB, mais de 6 anos de experiência em desenvolvimento Web,
          apaixonado por UI Design e entusiasta da web 3.0.
        </p>
        <p>
          Sócio Fundador da <span>PixelCraft</span>
        </p>

        <div className={styles.icon}>
          <a href={linkInsta} target="_blank">
            <Image
              src={insta}
              width={19}
              height={19}
              alt="Ícone do instagram"
            />
          </a>
          <a href={linkGithub} target="_blank">
            <Image src={github} width={19} height={19} alt="Ícone do GitHub" />
          </a>
          <a href={linkBehance} target="_blank">
            <Image src={beh} width={19} height={19} alt="Ícone do Behance" />
          </a>
          <a href={linkDribble} target="_blank">
            <Image src={dribb} width={19} height={19} alt="Ícone do Dribble" />
          </a>
        </div>
      </div>
    </div>
  );
}
