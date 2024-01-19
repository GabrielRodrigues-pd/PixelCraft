import React from "react";
import { Container, CardContact, Box } from "./styles";
import ButtonV2 from "../Buttons/ButtonV2";
import ButtonMsg from "../Buttons/ButtonMsg";
import IconEmail from "@/assets/email.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <Container>
      <h3>
        Ainda tem alguma dúvida? <br /> Entre em contato
      </h3>
      <Box>
        <CardContact>
          <Image src={IconEmail} alt="" />
          <div>
            <h3>E-mail</h3>
            <p>Envie sua dúvida por e-mail</p>
            <a href="mailto:studiopixelcraft@contato.com">
              studiopixelcraft@contato.com
            </a>
          </div>
        </CardContact>
        <h2>Vamos criar um pojeto?</h2>
        <ButtonV2 title="Iniciar um projeto" altDisc="Botão iniciar projeto" />
      </Box>
      <ButtonMsg />
    </Container>
  );
}
