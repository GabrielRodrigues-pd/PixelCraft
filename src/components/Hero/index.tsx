import { Container, Bg, Blur } from "./styles";

import Line from "../LineGrid";
import InfoHome from "../InfoHome";

import Image from "next/image";
import bg from "@/assets/bg.png";

export default function Hero() {
  return (
    <Container>
      <Bg>
        <Image
          src={bg}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          alt=""
          priority
        />
      </Bg>
      <Blur />
      <Blur posicao="rh" />
      <InfoHome />
      <Line />
    </Container>
  );
}
