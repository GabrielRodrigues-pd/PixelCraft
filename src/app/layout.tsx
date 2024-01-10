import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixelCraft - Studio",
  description:
    "Potencializamos o sucesso online dos nossos clientes por meio de uma combinação única de criatividade e expertise.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={readexPro.className}>{children}</body>
    </html>
  );
}
