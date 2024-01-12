import React from "react";
import Image from "next/image";
import { Container } from "./styles";

import icon from "@/assets/asteri.svg";

export default function Carrossel() {
  return (
    <Container>
      <p>Web Developer</p>
      <Image src={icon} alt="1" />
      <p>UI/UX Design</p>
      <Image src={icon} alt="1" />
      <p>Ecommerce</p>
      <Image src={icon} alt="1" />
      <p>Landingpages</p>
      <Image src={icon} alt="1" />
      <p>Lançamentos</p>
    </Container>
  );
}
