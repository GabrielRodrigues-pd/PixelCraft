import { styled } from "@/styles/stitches.config";

export const Container = styled("footer", {
  borderTop: "1px solid $gray_btn",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "4rem",
  alignItems: "center",

  "& p": {
    color: "$gray_span",
    fontFamily: "$Space",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  "& span": {
    color: "$gray_span",
    fontFamily: "$Space",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  "& div": {
    display: "flex",
    gap: "2.1rem",
    cursor: "pointer",
  },

  "& button": {
    cursor: "pointer",
    color: "$gray_span",
    backgroundColor: "transparent",
    border: "0",
    fontFamily: "$Readex",
    fontWeight: 500,
    textTransform: "uppercase",
  },
});
