import Head from 'next/head'
import '../styles/globals.sass'

import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Footer from './components/Footer'

import { useTransitionFix } from '../lib/useTransitionFix'

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useTransitionFix()

  return (
    <>
      <Head>
        <title>Lance Ellis</title>
        <meta name="description" content="
          Lance is a web designer and developer based in Austin, Texas. 
          He specializes in creating beautiful, minimalist websites and applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/logo_3.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#343434" />
      </Head>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        layoutScroll
        onExitComplete={() => { window.scrollTo(0, 0) }}
      >
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
