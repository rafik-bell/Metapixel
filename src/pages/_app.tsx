import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from './layout/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme } from '@mui/material';
import { useEffect } from 'react';
import icon from "../assets/image/icon.png"
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
  <>
  <Head>
    <title>Meta Pixel</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={`${icon.src}`} />
  </Head>
  
  
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>)
}
