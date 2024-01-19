import React from "react";
import { styled } from "@/styles/stitches.config";
import IconMsg from "@/assets/iconMsg.svg";
import Image from "next/image";

const Button = styled("button", {
  display: "inline-flex",
  padding: "20px 91px",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  borderRadius: ".6rem",
  backgroundColor: "$white",
  border: "none",
  color: "#0056FF",
  cursor: "pointer",

  fontFamily: "$Readex",
  fontSize: "16px",
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
