import { globalCss } from "@/styles/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    parddin: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$bg",
    color: "$white",
  },

  "body, input, textarea, p, button": {
    fontFamily: "Readex Pro",
    fontWeight: 400,
  },

  html: {
    fontSize: "62.5%",
  },
});
