import React from "react";
import { Footer, Container, BoxImg, Card } from "./styles";
import Image from "next/image";

export default function CaseCard({ image, title, description }) {
  return (
    <Container>
      <BoxImg>
        <Image src={image} alt="" />
      </BoxImg>

      <Card>
        <h2>{title}</h2>
        <p>{description}</p>
        <Footer>
          <span>Ui design</span>
          <span>Desenvolvimento</span>
          <button>Ver Case</button>
        </Footer>
      </Card>
    </Container>
  );
}
