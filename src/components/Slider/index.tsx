import React from "react";
import CardRating from "@/components/CardRating";

import Image from "next/image";
import Icon1 from "@/assets/imgIcon.png";
import { Container } from "./styles";

export default function Slider() {
  return (
    <Container>
      <CardRating
        title="Max Silva"
        status="Clínica Odontológica"
        name="Max Silva"
        disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.” "
      >
        <Image
          src={Icon1}
          style={{ objectFit: "cover", borderRadius: "50%", width: "100%" }}
          alt=""
        />
      </CardRating>
      <CardRating
        title="Max Silva"
        status="Clínica Odontológica"
        name="Max Silva"
        disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.” "
      >
        <Image
          src={Icon1}
          style={{ objectFit: "cover", borderRadius: "50%", width: "100%" }}
          alt=""
        />
      </CardRating>
      <CardRating
        title="Max Silva"
        status="Clínica Odontológica"
        name="Max Silva"
        disc="“O PixelCraft não apenas criou um site incrível, mastambém forneceram um suporte excepcional aolongo do processo.” "
      >
        <Image
          src={Icon1}
          style={{ objectFit: "cover", borderRadius: "50%", width: "100%" }}
          alt=""
        />
      </CardRating>
    </Container>
  );
}
