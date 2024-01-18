import { styled } from "../stitches.config";

export const Container = styled("div", {
  maxWidth: "122.1rem",

  display: "flex",
  flexDirection: "column",
  padding: "0 2rem",
  boxSizing: "content-box",
  margin: "0 auto",

  height: "100vh",
});

export const Main = styled("div", {
  maxWidth: "122.1rem",
  margin: "12rem auto 4.5rem auto",
  display: "flex",
  flexDirection: "column",
  gap: "12rem",
  padding: "0 2rem",
  boxSizing: "content-box",
});
