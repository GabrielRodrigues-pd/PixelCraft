import { styled } from "@/styles/stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  padding: "12.0rem 11.2rem",
  gap: "7.4rem",
  height: "100vh",
});

export const HeadCases = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& h2": {
    width: "34.1rem",
    color: "$blue_50",
    fontSize: "3.2rem",
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "$Space",
  },

  "& span": {
    color: "$blue_Dark_700",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "$Readex",
    textTransform: "uppercase",
  },

  "& p": {
    color: "$gray_300",
    width: "34.1rem",
    fontFamily: "$Readex",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
  },
});

export const BodyCases = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});
