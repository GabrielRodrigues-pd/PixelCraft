import { styled } from "@/styles/stitches.config";

export const Container = styled("section", {
  "& h3": {
    color: "$white",
    fontFamily: "$Space",
    fontSize: "1.8rem",
    fontWeight: 700,
  },
});

export const CardContact = styled("div", {
  borderRadius: ".8rem",
  border: "2px solid $gray_btn",
  padding: "2rem 0 2rem 3rem",
  display: "flex",
  alignItems: "flex-start",
  gap: "1.6rem",
  width: "39.6rem",

  "& h3": {
    color: "$blue_100",
    fontFamily: "$Readex",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.8px",
    paddingBottom: ".3rem",
  },
  "& p": {
    color: "$gray_span",
    fontFamily: "$Readex",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.8px",
    paddingBottom: "1.8rem",
  },

  "& a": {
    color: "$blue_700",
    fontFamily: "$Readex",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.8px",
    paddingBottom: "2rem",
  },
});

export const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "3.6rem 0rem .8rem 0rem",

  "& h2": {
    color: "$white",
    fontFamily: "$Readex",
    fontSize: "3.2rem",
    fontWeight: 700,
    letterSpacing: "1.6px",
  },
});
