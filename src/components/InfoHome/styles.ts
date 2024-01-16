import { styled } from "@/styles/stitches.config";

export const InfoHeader = styled("div", {
  marginTop: "12.0rem",
  display: "flex",
  justifyContent: "space-between",
});

export const Info = styled("div", {
  div: {
    display: "flex",
    alignItems: "center",
    gap: "16px",

    p: {
      fontSize: "1.4rem",
      color: "$blue_Dark_100",
    },
  },

  span: {
    color: "$blue_700",
  },

  h1: {
    fontSize: "7.2rem",
    textTransform: "uppercase",
  },

  p: {
    fontSize: "2.0rem",
    color: "$blue_Dark_100",
    width: "520px",
    fontWeight: "400",
    lineHeight: "normal",
    margin: "2.4rem 0",
  },
});

export const Nunbers = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",

  div: {
    padding: "2.7rem 0",
  },

  span: {
    color: "$blue_700",
  },

  p: {
    width: "166px",
    fontSize: "1.4rem",
    textAlign: "right",
    color: "$blue_Dark_100",
  },

  h3: {
    fontSize: "2.4rem",
    fontWeight: 700,
    textAlign: "right",
    paddingBottom: ".8rem",
  },
});

export const Ponto = styled("span", {});

export const Scroll = styled("div", {
  display: "flex",
  alignContent: "center",
  gap: "1.5rem",
  marginTop: "9.2rem",
});
