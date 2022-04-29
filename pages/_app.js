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
          He specializes in creating beautiful, minimalist websites and applications. 
          His interests span more than web development taking a general software development internship at Amazon at Los Angeles 
          and working with mutiple starts varying from automation, robotics, and fintech "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#343434" />
      </Head>
      <Header />
        <AnimatePresence
          exitBeforeEnter
          >
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
