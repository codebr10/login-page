import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react"
import theme from '../custom-theme'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
