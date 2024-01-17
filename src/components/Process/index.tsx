import Image from "next/image";
import { Container, BoxCard, Button } from "./styles";

import HeadComponent from "../HeadComponent";
import CardProcess from "../CardProcess";
import seta from "../../assets/seta.svg";

export default function Process() {
  const cardDatas = [
    {
      number: "01",
      title: "Discovery Channel",
      description: "O inicio de tudo, o ponto de start de todo projeto.",
    },
    {
      number: "02",
      title: "Ideação",
      description: "O nosso cliente apresenta a sua ideia de negócio.",
    },
    {
      number: "03",
      title: "Briefing",
      description: "Coletamos os dados necessários para implementação.",
    },
    {
      number: "04",
      title: "Wireframe",
      description: "O projeto começa a ganhar formas e conceitos.",
    },
    {
      number: "05",
      title: "UI Design",
      description:
        "O projeto ganha cores, vida e está pronto para implementação.",
    },
    {
      number: "06",
      title: "Desenvolvimento",
      description:
        "Nessa etapa codamos o projeto, utilizando as melhores práticas.",
    },
    {
      number: "07",
      title: "Validação e Entrega",
      description:
        "Nessa etapa validamos com o cliente todo projeto e entrega.",
    },
  ];

  return (
    <Container>
      <HeadComponent
        title={"Creative Process"}
        subTitle={"conheça nosso processo criativo"}
      />
      <BoxCard>
        {cardDatas.map((cardData) => (
          <CardProcess
            key={cardData.number}
            number={cardData.number}
            title={cardData.title}
            disc={cardData.description}
          />
        ))}
        <div>
          <Button>Vamos iniciar um Projeto?</Button>
          <Image src={seta} alt="" />
        </div>
      </BoxCard>
    </Container>
  );
}
