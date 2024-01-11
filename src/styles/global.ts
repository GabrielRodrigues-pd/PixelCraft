import { globalCss } from "@/styles/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    parddin: 0,
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
});
