import { Button } from "./styles";
import Image from "next/image";
import seta from "@/assets/seta.svg";

export default function ButtonV2() {
  return (
    <Button>
      Iniciar um projeto <Image src={seta} alt="" />
    </Button>
  );
}
