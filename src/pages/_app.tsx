import { AddressProvider } from "@/contexts/address";
import { PublishProvider } from "@/contexts/publications";
import { UserProvider } from "@/contexts/user";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <PublishProvider>
        <AddressProvider>
        <Component {...pageProps} />
        </AddressProvider>
      </PublishProvider>
    </UserProvider>
  );
}
