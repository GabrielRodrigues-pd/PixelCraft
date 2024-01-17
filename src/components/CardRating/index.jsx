import { styled, css } from "@/styles/stitches.config";

const cardStyles = css({
  maxWidth: "300px",
  padding: "6rem 3.5rem",
  borderRadius: "2.4rem",
  margin: "0 auto",
  marginBottom: "20px",
  border: "2px solid $gray_btn",
  height: "44.7rem",

  "& p": {
    color: "$gray_300",
    fontFamily: "$Readex",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%" /* 33px */,
  },
});

export function CardRating({ children }) {
  return <div className={cardStyles()}>{children}</div>;
}
