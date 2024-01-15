import { styled } from "@/styles/stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",

  "& h2": {
    color: "$white",
    fontFamily: "$Space",
    fontSize: "3.2rem",
    fontWeight: "700",
    textAlign: "center",
  },
});

export const BoxCard = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
  padding: "4rem 0 8rem 0",
});

export const Card = styled("div", {
  border: "2px solid $gray_btn",
  borderRadius: "8px",
  position: "relative",
  backgroundColor: "transparent",

  "&::before": {
    content: `''`,
    width: "37px",
    height: "2px",
    position: "absolute",
    top: "-2px",
    left: "70%",
    backgroundColor: "$blue_700",
  },

  "& div": {
    padding: "3.5rem 2.5rem",
  },

  "& h3": {
    color: "$blue_50",
    fontFamily: "$Space",
    fontSize: "2.4rem",
    fontWeight: "700",
    padding: "5px 0 8px 0",
  },

  "& p": {
    color: "$white",
    fontFamily: "$Readex",
    fontSize: "1.6rem",
    maxWidth: "334px",
  },
});

export const Technology = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "3.5rem",
});
