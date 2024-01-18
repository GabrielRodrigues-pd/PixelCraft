import React from "react";
import CardRating from "@/components/CardRating";

import Image from "next/image";
import Icon1 from "@/assets/imgIcon.png";
import { Container } from "./styles";

export default function Slider() {
  return (
    <Container>
      <CardRating
        title="UI Design & WebSite"
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
        title="UI Design App e Site"
        status="Clínica Odontológica"
        name="John Robe"
        disc="“A atenção aos detalhes e o profissionalismo demonstrado foram impressionantes. Recomendo sem hesitação, excelente trabalho!” "
      >
        <Image
          src={Icon1}
          style={{ objectFit: "cover", borderRadius: "50%", width: "100%" }}
          alt=""
        />
      </CardRating>
      <CardRating
        title="Loja virtual"
        status="Clínica Odontológica"
        name="Elena Lopes"
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
