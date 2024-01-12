import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  width: "100%",
  backgroundColor: "$white",
  display: "flex",
  height: "6.4rem",
  alignContent: "center",
  flexWrap: "wrap",
  justifyContent: "space-evenly",

  p: {
    fontSize: "1.6rem",
    fontWeight: "700",
    letterSpacing: "1.6px",
    textTransform: "uppercase",
    color: "black",
    fontFamily: "Space Grotesk",
  },
});
