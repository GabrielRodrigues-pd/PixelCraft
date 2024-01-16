import React from "react";
import { Container, Head, Body } from "./styles";

import CardDeveloper from "../CardDeveloper";

import Image from "next/image";
import star from "../../assets/star.svg";

import ImgD from "../../assets/IconDiogo.png";
import ImgG from "../../assets/IconGabriel.png";

export default function About() {
  return (
    <Container>
      <Head>
        <Image src={star} alt="" />
        <p>juntos, buscamos inovação e excelência</p>
        <h2>
          Nós somos a PixelCraft<span>.</span>
        </h2>
      </Head>
      <Body>
        <CardDeveloper
          altImgDev={"Foto de Diogo Alvez, Sócio Fundador."}
          imgDev={ImgD}
          nameDev={"Diogo Alves"}
        />
        <CardDeveloper
          altImgDev={"Foto de Gabriel Rodrigues, Sócio Fundador."}
          nameDev={"Gabriel Rodrigues"}
          imgDev={ImgG}
          logo={true}
          brand={true}
        />
      </Body>
    </Container>
  );
}
