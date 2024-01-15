import React from "react";
import { Footer, Container, BoxImg, Card } from "./styles";
import Image from "next/image";
import ButtonCase from "@/components/Buttons/ButtonCase";

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
          quality={100}
        />
      </BoxImg>

      <Card>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Footer>
          <div>
            <span>Ui design</span>
            <span>Desenvolvimento</span>
          </div>
          <ButtonCase title={"Ver Case"} />
        </Footer>
      </Card>
    </Container>
  );
}
