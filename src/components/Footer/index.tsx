import React from "react";
import Image from "next/image";
import { Container } from "./styles";
import logoPixel from "@/assets/logo.svg";
import iconTop from "@/assets/iconTop.svg";
import insta from "@/assets/redes/insta.svg";

export default function Footer() {
  return (
    <Container>
      <Image src={logoPixel} alt="" />
      <span>PixelCraft | Todos os direitos reservados</span>
      <div>
        <Image src={insta} alt="" />
        <p>_diogo.alvesb_</p>
      </div>
      <div>
        <Image src={insta} alt="" />
        <p>aeogabriel</p>
      </div>
      <div>
        <Image src={iconTop} alt="" />
        <button>Voltar ao Início</button>
      </div>
    </Container>
  );
}
