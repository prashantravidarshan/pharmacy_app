import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import WebLayout from "../layouts/web";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout =
    Component?.getLayout ?? ((page) => <WebLayout>{page}</WebLayout>);
  return (
    <SessionProvider session={session}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
