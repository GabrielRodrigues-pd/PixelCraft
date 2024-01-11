import { styled } from "../../styles/stitches.config";

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontFamily: "Space Grotesk",
  color: "$white",
  textTransform: "uppercase",
  fontWeight: 700,
  margin: "0 auto",
  justifyContent: "space-between",
  width: "100%",

  ul: {
    display: "flex",
    gap: "7.0rem",

    li: {
      listStyle: "none",
    },
  },
});
