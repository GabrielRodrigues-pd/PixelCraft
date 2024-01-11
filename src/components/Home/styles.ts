import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  width: "100%",
});

export const Bg = styled("div", {
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: "0px",
  left: "0px",
  zIndex: "-3",
});

export const Blur = styled("div", {
  position: "absolute",
  width: "362px",
  height: "362px",
  zIndex: "299",
  top: "50%",
  left: "-10%",
  filter: "blur(271.5px)",
  backgroundColor: "$blue_900",

  variants: {
    posicao: {
      rh: {
        position: "absolute",
        left: "90%",
      },
    },
  },
});

export const InfoHeader = styled("div", {});

export const Info = styled("div", {});

export const Nunbers = styled("div", {});
