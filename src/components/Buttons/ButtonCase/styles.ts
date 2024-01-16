import { styled } from "@/styles/stitches.config";

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "2px solid $gray_btn ",
  borderRadius: "5rem",
  padding: ".4rem .4rem .4rem 1.6rem",
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
  fontSize: "1.4rem",
  textTransform: "uppercase",
  color: "$white",
  fontFamily: "$Space",
  cursor: "pointer",
});