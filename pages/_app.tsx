import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EasterProvider } from '../context/EasterContext'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <EasterProvider>
      <Component {...pageProps} />
    </EasterProvider>
  )
}

export default MyApp
