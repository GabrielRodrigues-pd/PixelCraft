import { styled } from "@/styles/stitches.config";

export const Container = styled("section", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60vh",
});

export const Flame = styled("div", {
  maxWidth: "56.8rem",

  "& h2": {
    color: "$white",
    fontFamily: "$Readex",
    fontSize: "3.2rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "130%" /* 41.6px */,
    letterSpacing: "1.6px",
  },
  "& p": {
    color: "$gray_300",
    fontFamily: "$Readex",
    fontSize: "1.8rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%" /* 27px */,
    padding: "1.6rem 0 0 0",
  },
});

export const BoxContact = styled("div", {
  "& h3": {
    color: "$white",
    fontFamily: "$Space",
    fontSize: "1.8rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
});

export const BoxEmail = styled("div", {
  borderRadius: ".8rem",
  border: "2px solid $gray_btn",
  margin: "3.4rem 0 1.6rem 0",
  padding: "2.2rem 0 2.2rem 3.7rem",

  display: "flex",
  alignItems: "flex-start",
  gap: "1.6rem",

  "& h4": {
    color: "$blue_100",
    fontFamily: "$Space", // Fira Sans
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.8px",
  },

  "& p": {
    color: "$gray_span",
    fontFamily: "$Space", // Fira Sans
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.8px",
    padding: ".5rem 0 2rem 0",
  },

  "& a": {
    color: "$blue_700",
    fontFamily: "$Space", // Fira Sans
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "0.7px",
    textDecoration: "none",
  },
});
