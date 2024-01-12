import Image from "next/image";
import logo from "@/assets/logo.svg";

import { Nav, Container } from "@/components/Header/styles";
import Button from "../Button";

export default function Header() {
  return (
    <Container>
      <Nav>
        <Image src={logo} alt="logo" />
        <ul>
          <li>Cases</li>
          <li>Sobre nós</li>
          <li>Skills</li>
        </ul>
        <Button />
      </Nav>
    </Container>
  );
}
