import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

/* Components */

import NavBar from "@/components/NavBar";
/* Stitches */
import { Container, Header } from "@/styles/pages/app";

/* O globalStyles precisa ficar fora. A pagina muda mas o css global não */
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <NavBar />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
