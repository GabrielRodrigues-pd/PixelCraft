import { styled } from "@/styles/stitches.config";
import Image from "next/image";

import star from "../../assets/star.svg";

const Container = styled("div", {
  border: "2px solid $gray_btn",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  borderRadius: "5rem",
  width: "28rem",
  padding: "7px 1rem",
  boxSizing: "content-box",
  color: "$blue_Dark_500",
  textAlign: "center",
  fontFamily: "$Readex",
  fontSize: "1.2rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "uppercase",
  textAlign: "center",
});

export default function TagLine({ title }) {
  return (
    <Container>
      <Image src={star} alt="" />
      {title}
    </Container>
  );
}
