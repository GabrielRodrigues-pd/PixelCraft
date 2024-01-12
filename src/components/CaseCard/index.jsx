import React from "react";
import { Footer, Container, BoxImg, Card } from "./styles";
import Image from "next/image";

export default function CaseCard({ image, title, description }) {
  return (
    <Container>
      <BoxImg>
        <Image
          src={image}
          width={554}
          height={398}
          style={{
            objectFit: "cover",
          }}
          alt=""
        />
      </BoxImg>

      <Card>
        <h2>{title}</h2>
        <p>{description}</p>
        <Footer>
          <div>
            <span>Ui design</span>
            <span>Desenvolvimento</span>
          </div>
          <button>Ver Case</button>
        </Footer>
      </Card>
    </Container>
  );
}
