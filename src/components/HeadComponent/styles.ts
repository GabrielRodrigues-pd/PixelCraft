import { styled } from "@/styles/stitches.config";

export const Head = styled("div", {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& div": {
    display: "flex",
    alignItems: "center",
    gap: ".8rem",
    paddingBottom: "1rem",
  },

  "& h2": {
    color: "$white",
    fontSize: "3.2rem",
    fontFamily: "$Space",
  },
  "& p": {
    color: "$blue_P",
    fontSize: "1.6rem",
    fontFamily: "$Readex",
    textTransform: "uppercase",
    display: "inline-block",
  },

  "& span": {
    color: "$blue_700",
  },
});
