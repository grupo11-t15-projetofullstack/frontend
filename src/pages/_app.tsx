import { PublishProvider } from "@/contexts/publications"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PublishProvider>
      <Component {...pageProps} />
    </PublishProvider>
  )
}
