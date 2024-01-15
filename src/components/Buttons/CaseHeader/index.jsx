import { Button } from "./styles";
import Image from "next/image";
import seta from "@/assets/setaV2.svg";

export default function CaseHeader({ title }) {
  return (
    <Button>
      {title} <Image src={seta} alt="" />
    </Button>
  );
}
