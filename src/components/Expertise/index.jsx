import React from "react";

import Image from "next/image";
import { Container, Card, BoxCard, Technology } from "./styles";

import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

import css from "../../assets/technology/css.svg";
import figma from "../../assets/technology/figma.svg";
import html from "../../assets/technology/html.svg";
import js from "../../assets/technology/js.svg";
import next from "../../assets/technology/next.svg";
import react from "../../assets/technology/react.svg";
import sass from "../../assets/technology/sass.svg";
import wordpress from "../../assets/technology/wordpress.svg";

export default function Expertise() {
  return (
    <Container>
      <h2>Our Expertise</h2>
      <BoxCard>
        <Card>
          <div>
            <Image src={icon1} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <Image src={icon2} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <Image src={icon3} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </Card>
      </BoxCard>
      <Technology>
        <Image src={css} alt="" />
        <Image src={figma} alt="" />
        <Image src={html} alt="" />
        <Image src={js} alt="" />
        <Image src={next} alt="" />
        <Image src={react} alt="" />
        <Image src={sass} alt="" />
        <Image src={wordpress} alt="" />
      </Technology>
    </Container>
  );
}
