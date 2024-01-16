import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8rem",
});

export const Head = styled("div", {
  margin: "0 auto",

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
    paddingBottom: "8px",
    paddingLeft: "8px",
  },

  "& span": {
    color: "$blue_700",
  },
});

export const Body = styled("div", {
  width: "100%",
});
