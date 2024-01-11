import { styled } from "../styles/stitches.config";

const Button = styled("button", {
  backgroundColor: "$blue_700",
  color: "#ECF8FF",
  border: "none",
  width: 262,
  height: 48,
  borderRadius: 50,
  fontSize: 14,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$blue_600",
  },
});

export default function Page() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro
        incidunt deleniti expedita earum ut quaerat quam? Fugit fugiat expedita
        itaque, inventore, fuga harum magni consequatur aperiam eos id debitis?
      </p>
      <Button>Hello, Next.js!</Button>
    </>
  );
}
