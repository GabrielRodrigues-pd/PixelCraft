import { styled } from "@/styles/stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "6rem",
});

export const BoxCard = styled("div", {
  display: "flex",
  gap: "3.2rem",
  flexWrap: "wrap",

  "& div": {
    display: "flex",
    justifyContent: "center",
    width: "28rem",
  },
});

export const Button = styled("button", {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  color: "$white",
  fontFamily: "$Space",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "150%" /* 21px */,
  textTransform: "uppercase",
});
