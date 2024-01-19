import { Button } from "./styles";
import Image from "next/image";
import seta from "@/assets/seta.svg";

interface ButtonProps {
  title: string;
  altDisc: string;
}

export default function ButtonV2({ title, altDisc }: ButtonProps) {
  return (
    <Button>
      {title} <Image src={seta} alt={altDisc} />
    </Button>
  );
}
