import { styled } from "@/styles/stitches.config";

export const CardTop = styled("div", {
  display: "flex",
  gap: "4rem",
});

export const OurBrand = styled("div", {
  width: "21.6rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginRight: "8rem",

  "& p": {
    color: "$white",
    fontSize: "1.6rem",
    fontWeight: 700,
    lineHeight: "150%",
    fontFamily: "$Space",
  },
  "& span": {
    fontFamily: "$Space",
    fontWeight: 300,
  },

  "& div": {
    display: "flex",
    position: "relative",
    alignItems: "center",
    paddingBottom: ".8rem",

    "&::before": {
      content: "",
      position: "absolute",
      top: "-2.4rem",
      left: "0",
      width: "11rem",
      height: "2px",
      backgroundColor: "$white",
    },
  },

  "& h2": {
    color: "$gray_300",
    fontFamily: "$Space",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
});

export const Logo = styled("div", {
  borderRadius: ".8rem",
  backgroundColor: "$blue_700",
  padding: "1rem",
  marginRight: "1.5rem",

  textAlign: "center",
});

export const BoxWrap = styled("div", {
  position: "relative",
});

export const X = styled("div", {
  position: "absolute",
  zIndex: "1",
  width: "6rem",
  height: "6rem",
  backgroundColor: "$blue_700",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
});

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
