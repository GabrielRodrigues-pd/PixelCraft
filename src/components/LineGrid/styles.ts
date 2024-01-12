import { styled } from "@/styles/stitches.config";

export const LineGrid = styled("div", {
  position: "absolute",
  top: "0px",
  left: "0px",
  padding: "0 11.2rem",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  zIndex: "-1",

  span: {
    width: "0.5px",
    borderLeft: "0.5px solid #1c1c1c",
    borderRight: "0.5px solid #1c1c1c",
  },
});
