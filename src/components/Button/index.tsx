import { styled } from "@/styles/stitches.config";
import Image from "next/image";
import seta from "@/assets/button.svg";

export const ButtonHeader = styled("button", {
  padding: ".6rem .6rem .6rem 2.1rem",
  border: "2px solid $blue_700",
  color: "$blue_50",
  backgroundColor: "transparent",
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  gap: ".8rem",
});

export default function Button() {
  return (
    <>
      <ButtonHeader>
        Iniciar um projeto <Image src={seta} alt="" />
      </ButtonHeader>
    </>
  );
}
