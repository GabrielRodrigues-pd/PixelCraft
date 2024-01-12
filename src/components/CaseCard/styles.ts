import { css, styled } from "@/styles/stitches.config";

export const cardCSS = css({
  backgroundColor: "#20222",
  width: "100%",
  maxWidth: "500px",
  height: "250px",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

  "& h1": {
    color: "#fff",
    fontSize: "24px",
    margin: "0",
  },

  "& h2": {
    color: "#a8a9ab",
    fontSize: "16px",
    margin: "0",
  },

  "& button": {
    backgroundColor: "#ff7e6a",
    color: "#202224",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s",

    "&:hover": {
      backgroundColor: "#ff6d5a",
    },
  },
});

export const Container = styled("div", {
  display: "flex",
  backgroundColor: "$card_Case",
  borderRadius: "2.4rem",
  gap: "9.2rem",
});

export const Card = styled("div", {
  padding: "8.7rem 4.8rem 0 6rem",
  width: "100%",

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
    padding: "1.6rem 0 8rem 0",
  },

  "& span": {
    fontSize: "1.4rem",
  },
});
export const Footer = styled("footer", {
  display: "flex",
  justifyContent: "space-between",

  "& span": {
    border: "2px solid $blue_Dark_500",
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
