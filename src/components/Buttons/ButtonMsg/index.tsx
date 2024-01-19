import React from "react";
import { styled } from "@/styles/stitches.config";
import IconMsg from "@/assets/iconMsg.svg";
import Image from "next/image";

const Button = styled("button", {
  display: "inline-flex",
  padding: "2rem 9.1rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  borderRadius: ".6rem",
  backgroundColor: "transparent",
  border: "1px solid $blue_Dark_50",
  cursor: "pointer",

  color: "$blue_50",
  fontFamily: "$Readex", // Open Sans,
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
});

export default function ButtonMsg() {
  return (
    <Button>
      <Image src={IconMsg} alt="Icon enviar mensagem" />
      Enviar mensagem
    </Button>
  );
}
