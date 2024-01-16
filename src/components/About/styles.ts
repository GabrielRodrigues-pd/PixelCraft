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

export const CardTop = styled("div", {
  display: "flex",
  gap: "4rem",
});

export const BoxWrap = styled("div", {});

export const InfoCard = styled("div", {
  width: "43rem",
  marginTop: "7rem",

  "& h3": {
    color: "$white",
    fontFamily: "$Space",
    fontSize: "3.6rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    padding: ".8rem 0 1.6rem 0",
  },

  "& p": {
    color: "$white",
    fontFamily: "$Readex",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    paddingBottom: "3rem",
  },

  "& span": {
    color: "$blue_700",
    fontWeight: "700",
  },
});

export const Icon = styled("div", {
  display: "flex",
  gap: "1.6rem",
});
