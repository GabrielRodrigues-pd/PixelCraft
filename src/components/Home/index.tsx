import NavBar from "../NavBar";
import { Container, Bg, Blur } from "./styles";

import Line from "../LineGrid";
import InfoHome from "../InfoHome";
import Carrossel from "../Carrossel";

import Image from "next/image";
import bg from "@/assets/bg.png";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Bg>
        <Image src={bg} quality={100} sizes="100vh" alt="" priority />
      </Bg>
      <Blur />
      <Blur posicao="rh" />
      <InfoHome />
      <Line />
      <Carrossel />
    </Container>
  );
}
