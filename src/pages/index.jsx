import { styled } from "../styles/stitches.config";

const Button = styled("button", {
  backgroundColor: "$Blue700",
  color: "#ECF8FF",
  border: "none",
  width: 262,
  height: 48,
  borderRadius: 50,
  fontSize: 14,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "Blue",
  },
});

export default function Page() {
  return <Button>Hello, Next.js!</Button>;
}
