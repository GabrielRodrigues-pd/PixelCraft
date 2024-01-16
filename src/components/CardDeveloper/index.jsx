import React from "react";

import TagLine from "../TagLine";
import { CardTop, OurBrand, Logo, BoxWrap, X, InfoCard, Icon } from "./styles";
import Image from "next/image";

// import IconD from "../../assets/IconDiogo.png";
import iconX from "../../assets/x.svg";
import LogoIcon from "../../assets/logoPng.svg";

import beh from "../../assets/redes/beh.svg";
import dribb from "../../assets/redes/dribb.svg";
import github from "../../assets/redes/github.svg";
import insta from "../../assets/redes/insta.svg";

export default function CardDeveloper({
  imgDev,
  nameDev,
  altImgDev,
  logo = false,
  brand = false,
}) {
  return (
    <CardTop>
      {brand ? (
        <OurBrand>
          <div>
            <Logo>
              <Image src={LogoIcon} alt="" />
            </Logo>
            <h2>Nossa marca</h2>
          </div>
          <p>
            Projetos <span>que impressionam, experiências que</span> cativam!
          </p>
        </OurBrand>
      ) : (
        <></>
      )}

      <BoxWrap>
        {logo ? (
          <X>
            <Image src={iconX} alt="" />
          </X>
        ) : (
          <></>
        )}

        <Image src={imgDev} quality={100} alt={altImgDev} />
      </BoxWrap>
      <InfoCard>
        <TagLine title={"UI designer | frontend Developer"} />
        <h3>{nameDev}</h3>
        <p>
          Graduado em ciências da computação, pela universidade Estadual da
          Paraíba - UEPB, mais de 6 anos de experiência em desenvolvimento Web,
          apaixonado por UI Design e entusiasta da web 3.0.
        </p>
        <p>
          Sócio Fundador da <span>PixelCraft</span>
        </p>
        <Icon>
          <Image src={insta} alt="Ícone do instagram" />
          <Image src={github} alt="Ícone do GitHub" />
          <Image src={beh} alt="Ícone do Behance" />
          <Image src={dribb} alt="Ícone do Dribble" />
        </Icon>
      </InfoCard>
    </CardTop>
  );
}
