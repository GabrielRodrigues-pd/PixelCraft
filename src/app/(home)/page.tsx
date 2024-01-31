import Blur from "@/components/Blur";
import Carrossel from "@/components/Carrossel";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Main from "@/components/Main";
import Cases from "@/components/Cases";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Process from "@/components/Process/indes";
import Rating from "@/components/Rating";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BgHero from "@/components/BgHero";

export default function Home() {
  return (
    <Container>
      <BgHero>
        <Header />
        <Hero />
      </BgHero>

      <Blur />
      <Carrossel />
      <Main>
        <Cases />
        <Expertise />
        <About />
        <Process />
        <Rating />
      </Main>
      <Contact />
      <Footer />
    </Container>
  );
}
