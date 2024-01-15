import { styled } from "@/styles/stitches.config";

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "2px solid $gray_btn ",
  borderRadius: "8px",
  padding: "1.5rem",
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
  fontSize: "1.4rem",
  textTransform: "uppercase",
  color: "$blue_Dark_300",
  cursor: "pointer",
});
