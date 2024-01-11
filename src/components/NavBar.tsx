import Image from "next/image";
import logo from "@/assets/logo.svg";

import { Nav } from "@/styles/pages/home";
import Button from "./Button";

export default function NavBar() {
  return (
    <Nav>
      <Image src={logo} priority={true} alt="logo" />
      <ul>
        <li>Cases</li>
        <li>Sobre nós</li>
        <li>Skills</li>
      </ul>
      <Button />
    </Nav>
  );
}
