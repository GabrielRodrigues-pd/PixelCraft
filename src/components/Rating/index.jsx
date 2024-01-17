import React from "react";
import { Container } from "./styles";
import HeadComponent from "../HeadComponent";
import { Carousel } from "../Carousel";
import { CardRating } from "../CardRating";

export default function Rating() {
  return (
    <Container>
      <HeadComponent
        title={"O que dizem nossos Clientese e Parceiros"}
        subTitle={"o motivo do nosso sucesso"}
      />
      <Carousel>
        <CardRating>
          <h2>UI Virtual</h2>
          <p>
            O PixelCraft não apenas criou um site incrível, mas também
            forneceram um suporte excepcional ao longo do processo.
          </p>
          <p>Max Silva, Clinica Odontológica</p>
        </CardRating>
        <CardRating>
          <h2>UI Virtual</h2>
          <p>
            A atenção aos detalhes e o profissionalismo demonstrado foram
            impressionantes. Recomendo sem hesitação, excelente trabalho!
          </p>
          <p>Jonh Silva, Logística Logic</p>
        </CardRating>
        <CardRating>
          <h2>UI Virtual</h2>
          <p>
            O PixelCraft não apenas criou um site incrível, mas também
            forneceram um suporte excepcional ao longo do processo.
          </p>
          <p>Max Silva, Clinica Odontológica</p>
        </CardRating>
        <CardRating>
          <h2>UI Virtual</h2>
          <p>
            O PixelCraft não apenas criou um site incrível, mas também
            forneceram um suporte excepcional ao longo do processo.
          </p>
          <p>Max Silva, Clinica Odontológica</p>
        </CardRating>
        <CardRating>
          <h2>UI Virtual</h2>
          <p>
            O PixelCraft não apenas criou um site incrível, mas também
            forneceram um suporte excepcional ao longo do processo.
          </p>
          <p>Max Silva, Clinica Odontológica</p>
        </CardRating>
        <CardRating>
          <h2>UI Virtual</h2>
          <p>
            O PixelCraft não apenas criou um site incrível, mas também
            forneceram um suporte excepcional ao longo do processo.
          </p>
          <p>Max Silva, Clinica Odontológica</p>
        </CardRating>
      </Carousel>
    </Container>
  );
}
