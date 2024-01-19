import React from "react";
import { Container, Flame, BoxContact, BoxEmail } from "./styles";
import ButtonV2 from "../Buttons/ButtonV2";
import ButtonMsg from "../Buttons/ButtonMsg";
import IconEmail from "@/assets/email.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <Container>
      <Flame>
        <h2>
          Vamos iniciar um <br /> Projeto?
        </h2>
        <p>
          Você tem uma ideia inovadora? Está em busca de parcerias para
          transformá-la em realidade? Então, vamos criar um projeto juntos!
        </p>
        <ButtonV2
          title="Iniciar um projeto"
          altDisc="Botão para iniciar projeto"
        />
      </Flame>
      <BoxContact>
        <h3>
          Ainda tem alguma dúvida? <br /> Entre em contato
        </h3>
        <BoxEmail>
          <Image src={IconEmail} alt="" />
          <div>
            <h4>E-mail</h4>
            <p>Envie sua dúvida por e-mail</p>
            <a href="mailto:studiopixelcraft@contato.com">
              studiopixelcraft@contato.com
            </a>
          </div>
        </BoxEmail>
        <ButtonMsg />
      </BoxContact>
    </Container>
  );
}
