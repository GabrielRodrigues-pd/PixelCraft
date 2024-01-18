import { styled, css } from "@/styles/stitches.config";

export const cardStyles = css({
  maxWidth: "37.5rem",
  padding: "6rem 3.5rem",
  borderRadius: "2.4rem",
  marginBottom: "20px",
  border: "2px solid $gray_btn",
  height: "44.7rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "white",
  },

  "& h2": {
    color: "$white",
    fontFamily: "$Space",
    fontSize: "2.4rem",
    fontStyle: "normal",
    fontWeight: 700,
  },

  "& p": {
    color: "$gray_300",
    fontFamily: "$Readex",
    fontSize: "2.2rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%" /* 33px */,
    paddingTop: "1.6rem",
  },
});

export const innerImg = css({
  display: "flex",
  gap: "1.6rem",
  alignItems: "center",

  "& h3": {
    color: "$white",
    fontFamily: "$Readex",
    fontSize: "2.2rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "150%" /* 33px */,
  },
  "& span": {
    color: "$gray_span",
    fontFamily: "$Readex",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%" /* 33px */,
  },
});

export const Info = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const Wrapper = styled("div", {
  width: "6rem",
  height: "6rem",
  borderRadius: "50%",

  "& img": {
    width: "100%",
    objectFit: "cover",
  },
});
