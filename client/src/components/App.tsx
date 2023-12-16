import type { AppProps } from "next/app";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { UserProvider } from "@/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}
