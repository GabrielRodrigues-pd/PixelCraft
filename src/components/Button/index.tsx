import Image from "next/image";
import seta from "@/assets/button.svg";

import { ButtonHeader } from "./styles";

export default function Button() {
  return (
    <>
      <ButtonHeader>
        Iniciar um projeto <Image src={seta} alt="" />
      </ButtonHeader>
    </>
  );
}
