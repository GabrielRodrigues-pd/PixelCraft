/* Stitches */
/* import { Header } from "@/styles/pages/app"; */
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Carrossel from "@/components/Carrossel";
import Cases from "@/components/Cases";
import { Container } from "@/styles/pages/app";

export default function Page() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>

      <Carrossel />
      <Cases></Cases>
    </>
  );
}
