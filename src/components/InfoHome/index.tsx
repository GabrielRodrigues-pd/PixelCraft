import React from "react";
import { InfoHeader, Info, Nunbers, Ponto, Scroll } from "./styles";

import Image from "next/image";
import ButtonV2 from "../Buttons/ButtonV2";

import foguete from "@/assets/foguete.svg";
import mouser from "@/assets/mouser.svg";

export default function InfoHome() {
  return (
    <InfoHeader>
      <Info>
        <div>
          <Image src={foguete} alt="Foguete PixelCraft" />
          <p>Incredible design, innovative strategies, success</p>
        </div>
        <h1>
          Design<span>.</span> <br />
          Development<span>.</span> <br />
          Knowledge
          <span>.</span>
        </h1>
        <p>
          Potencializamos o sucesso online dos nossos clientes por meio de uma
          combinação única de criatividade e expertise.
        </p>
        <ButtonV2 />
      </Info>
      <Nunbers>
        <p>Nossos números</p>
        <div>
          <h3>
            <span>+</span>5 anos
          </h3>
          <p>Inovando e levando aos nossos clientes a melhor experiência.</p>
        </div>
        <div>
          <h3>
            <span>+</span>20 Projetos
          </h3>
          <p>Não apenas entregamos projetos, mas soluções eficientes.</p>
        </div>
        <div>
          <h3>
            <span>+</span>100 clientes
          </h3>
          <p>Clientes satisfeitos e felizes com o seu posicionamento.</p>
        </div>
        <Scroll>
          <p>Scroll Down</p>
          <Image src={mouser} alt="" />
        </Scroll>
      </Nunbers>
    </InfoHeader>
  );
}
