import { css, styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  backgroundColor: "$card_Case",
  borderRadius: "2.4rem",
});

export const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  padding: "8rem 5rem 5rem 5rem",

  "& h2": {
    fontSize: "2.4rem",
    fontWeight: "500",
    color: "$blue_50",
    fontFamily: "$Space",
    textTransform: "uppercase",
  },

  "& p": {
    fontSize: "1.4rem",
    fontWeight: "400",
    color: "$gray_300",
    fontFamily: "$Readex",
    lineHeight: "150%",
    padding: "1.6rem 0",
    maxWidth: "100",
  },

  "& span": {
    fontSize: "1.4rem",
  },
});
export const Footer = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "2rem",

  "& span": {
    border: "1px solid $gray_btn",
    borderRadius: "5rem",
    fontSize: "1.2rem",
    fontWeight: "400",
    padding: "0.7rem 2.2rem",
    color: "$blue_Dark_500",
    textTransform: "uppercase",
    marginRight: "1.2rem",
  },
});

export const BoxImg = styled("div", {
  padding: "1rem",
  width: "100%",

  "& img": {
    borderRadius: "2.4rem",
  },
});
