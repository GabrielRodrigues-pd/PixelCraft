import Image from "next/image";
import icon from "../../../assets/buttonCase.svg";
import { Button } from "./styles";

export default function ButtonCase({ title }) {
  return (
    <Button>
      {title} <Image src={icon} alt="" />
    </Button>
  );
}
