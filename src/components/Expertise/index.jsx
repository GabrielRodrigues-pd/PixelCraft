import React from "react";

import Image from "next/image";
import { Container, Card, BoxCard } from "./styles";

import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

export default function Expertise() {
  return (
    <Container>
      <h2>Our Expertise</h2>
      <BoxCard>
        <Card>
          <div>
            <Image src={icon1} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <Image src={icon2} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <Image src={icon3} alt="" />
            <h3>Design de Interface</h3>
            <p>
              Designers incríveis, modernos, clear e que realmente se destacam
            </p>
          </div>
        </Card>
      </BoxCard>
    </Container>
  );
}
