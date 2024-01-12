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
  backgroundColor: "red",
  gap: "9.2rem",
});

export const Card = styled("div", {
  "& h2": {
    fontSize: "2.4rem",
    fontWeight: "500",
    color: "$blue_50",
  },

  "& p": {
    fontSize: "1.4rem",
    fontWeight: "500",
    color: "$blue_50",
  },

  "& span": {
    fontSize: "1.4rem",
  },
});
export const Footer = styled("footer", {});

export const BoxImg = styled("div", {});
