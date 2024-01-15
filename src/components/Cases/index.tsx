import { Container, HeadCases, BodyCases } from "./style";

import CaseCard from "@/components/CaseCard";
import img1 from "@/assets/img-card.png";
import CaseHeader from "@/components/Buttons/CaseHeader";

export default function Cases() {
  const caseDatas = [
    {
      id: 1,
      image: img1,
      title: "Discovery Channel",
      description:
        "O Discovery Channel é um canal de televisão por assinatura dedicado à programação educativa e documental. Através de produções inovadoras e narrativas envolventes, o Discovery Channel busca inspirar a curiosidade e o entendimento sobre os fenômenos e a diversidade da vida no planeta Terra. Seu conteúdo diversificado e educativo o torna um dos canais mais populares e respeitados no campo da televisão documental.",
    },
    {
      id: 2,
      image: img1,
      title: "Discovery Channel",
      description:
        "O Discovery Channel é um canal de televisão por assinatura dedicado à programação educativa e documental. Através de produções inovadoras e narrativas envolventes, o Discovery Channel busca inspirar a curiosidade e o entendimento sobre os fenômenos e a diversidade da vida no planeta Terra. Seu conteúdo diversificado e educativo o torna um dos canais mais populares e respeitados no campo da televisão documental.",
    },
  ];
  return (
    <Container>
      <HeadCases>
        <div>
          <span>Our recent Cases</span>
          <h2>Conheça os Projetos que já Desenvolvemos</h2>
        </div>
        <p>Designers incríveis, modernos, clear e que realmente se destacam</p>
        <CaseHeader title={"Ver todos os Cases"} />
      </HeadCases>
      <BodyCases>
        {caseDatas.map((caseData) => (
          <CaseCard
            key={caseData.id}
            image={caseData.image}
            title={caseData.title}
            description={caseData.description}
          />
        ))}
      </BodyCases>
    </Container>
  );
}
