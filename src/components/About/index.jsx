import React from "react";
import { Container, Head, Body } from "./styles";

import CardDeveloper from "../CardDeveloper";
import HeadComponent from "../HeadComponent";

// import Image from "next/image";

import ImgD from "../../assets/IconDiogo.png";
import ImgG from "../../assets/IconGabriel.png";

export default function About() {
  return (
    <Container>
      <HeadComponent
        title={"Nós somos a PixelCraft"}
        subTitle={"juntos, buscamos inovação e excelência"}
      />
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
