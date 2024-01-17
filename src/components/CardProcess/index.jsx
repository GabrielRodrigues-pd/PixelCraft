import Image from "next/image";
import { Card } from "./styles";

export default function CardProcess({ title, number, disc }) {
  return (
    <Card>
      <div>
        <span>{number}</span>
        <h2>{title}</h2>
        <p>{disc}</p>
      </div>
    </Card>
  );
}
