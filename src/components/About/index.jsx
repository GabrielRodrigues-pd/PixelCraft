import React from "react";
import {
  Container,
  Head,
  Body,
  CardTop,
  BoxWrap,
  InfoCard,
  Icon,
} from "./styles";

import beh from "../../assets/redes/beh.svg";
import dribb from "../../assets/redes/dribb.svg";
import github from "../../assets/redes/github.svg";
import insta from "../../assets/redes/insta.svg";

import Image from "next/image";
import TagLine from "../TagLine";
import star from "../../assets/star.svg";

import IconD from "../../assets/IconDiogo.png";
import IconG from "../../assets/IconGabriel.png";

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
        <CardTop>
          <BoxWrap>
            <Image src={IconD} alt="" />
          </BoxWrap>
          <InfoCard>
            <TagLine title={"UI designer | frontend Developer"} />
            <h3>Diogo Alves</h3>
            <p>
              Graduado em ciências da computação, pela universidade Estadual da
              Paraíba - UEPB, mais de 6 anos de experiência em desenvolvimento
              Web, apaixonado por UI Design e entusiasta da web 3.0.
            </p>
            <p>
              Sócio Fundador da <span>PixelCraft</span>
            </p>
            <Icon>
              <Image src={insta} alt="" />
              <Image src={github} alt="" />
              <Image src={beh} alt="" />
              <Image src={dribb} alt="" />
            </Icon>
          </InfoCard>
        </CardTop>
        <CardTop>
          <BoxWrap>
            <Image src={IconG} quality={100} alt="" />
          </BoxWrap>
          <InfoCard>
            <TagLine title={"UI designer | frontend Developer"} />
            <h3>Gabriel Rodrigues</h3>
            <p>
              Graduado em ciências da computação, pela universidade Estadual da
              Paraíba - UEPB, mais de 6 anos de experiência em desenvolvimento
              Web, apaixonado por UI Design e entusiasta da web 3.0.
            </p>
            <p>
              Sócio Fundador da <span>PixelCraft</span>
            </p>
            <Icon>
              <Image src={insta} alt="Ícone do instagram" />
              <Image src={github} alt="Ícone do GitHub" />
              <Image src={beh} alt="Ícone do Behance" />
              <Image src={dribb} alt="Ícone do Dribble" />
            </Icon>
          </InfoCard>
        </CardTop>
      </Body>
    </Container>
  );
}
