import type { AppProps } from 'next/app'

import Layout from '@components/Layout/Layout'
import CartProvider from '@store/Cart'
import '../global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
