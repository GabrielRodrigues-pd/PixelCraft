import Image from "next/image";
import logo from "@/assets/logo.svg";

import { Nav } from "@/components/NavBar/styles";
import Button from "../Button";

export default function NavBar() {
  return (
    <Nav>
      <Image src={logo} alt="logo" />
      <ul>
        <li>Cases</li>
        <li>Sobre nós</li>
        <li>Skills</li>
      </ul>
      <Button />
    </Nav>
  );
}
