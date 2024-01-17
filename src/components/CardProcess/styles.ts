import { styled } from "@/styles/stitches.config";

export const Card = styled("div", {
  borderRadius: "1.2rem",
  border: "2px solid $gray_btn",
  width: "28rem",

  "& div": {
    padding: "2.3rem",
    display: "flex",
    flexDirection: "column",
    gap: ".8rem",
  },

  "& span": {
    color: "$blue_700",
    fontSize: "1.8rem",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.9px",
  },

  "& h2": {
    color: "$white",
    fontSize: "1.8rem",
    fontFamily: "$Space",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.9px",
    textTransform: "uppercase",
  },
  "& p": {
    color: "$gray_300",
    fontSize: "1.4rem",
    fontFamily: "$Readex",
    fontWeight: "400",
    lineHeight: "150%",
  },
});
