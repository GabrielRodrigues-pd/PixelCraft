import { cardStyles, Info, Wrapper, innerImg } from "./styles";
import Image from "next/image";

import icon from "@/assets/aspas.svg";

interface CardProps {
  title: string;
  disc: string;
  name: string;
  status: string;
  children?: React.ReactNode;
}

export default function CardRating({
  title,
  disc,
  name,
  status,
  children,
}: CardProps) {
  return (
    <div className={cardStyles()}>
      <div>
        <h2>{title}</h2>
        <p>{disc}</p>
      </div>
      <Info>
        <div className={innerImg()}>
          <Wrapper>{children}</Wrapper>
          <div>
            <h3>{name}</h3>
            <span>{status}</span>
          </div>
        </div>
        <Image src={icon} alt="" />
      </Info>
    </div>
  );
}
