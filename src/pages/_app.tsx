import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme } from '@mui/material';
import { useEffect } from 'react';
const theme = createTheme({
  typography: { fontFamily: ["Titre","Sous-titre","Text"].join(",") }
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      
    });
  }, []);
  return (
  
  
  <Layout>
  <Component {...pageProps} />
  </Layout>)
}
