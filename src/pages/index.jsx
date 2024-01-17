/* Stitches */
/* import { Header } from "@/styles/pages/app"; */
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Carrossel from "@/components/Carrossel";
import Cases from "@/components/Cases";
import Expertise from "../components/Expertise";
import About from "../components/About";
import Process from "../components/Process";
import Rating from "../components/Rating";

import { Container, Main } from "@/styles/pages/app";

export default function Page() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <Carrossel />
      <Main>
        <Cases />
        <Expertise />
        <About />
        <Process />
        <Rating />
      </Main>
    </>
  );
}
