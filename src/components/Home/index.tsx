import NavBar from "../NavBar";
import { Container, Bg, Blur, InfoHeader, Info, Nunbers } from "./styles";
import Line from "../LineGrid";

import Image from "next/image";
import bg from "@/assets/bg.png";
import foguete from "@/assets/foguete.svg";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Bg>
        <Image src={bg} quality={100} sizes="100vh" alt="" priority />
      </Bg>
      <Blur />
      <Blur posicao="rh" />
      <InfoHeader>
        <Info>
          <div>
            <Image src={foguete} alt="Foguete PixelCraft" />
            <p>Incredible design, innovative strategies, success</p>
          </div>
        </Info>
        <Nunbers></Nunbers>
      </InfoHeader>
      <Line />
    </Container>
  );
}
