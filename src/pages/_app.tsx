import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout/Layout'
import { createTheme } from '@mui/material';
const theme = createTheme({
  typography: { fontFamily: ["Titre","Sous-titre","Text"].join(",") }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  
  
  <Layout>
  <Component {...pageProps} />
  </Layout>)
}
