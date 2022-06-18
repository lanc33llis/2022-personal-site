import { motion } from "framer-motion"
import { useRouter } from "next/router"
import Head from "next/head"


const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
}

const CANONICAL_DOMAIN = 'https://lanc3.dev';

const Layout = ({children, key}) => {
  const router = useRouter()
  const _pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
    router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
  ]);
  const canonicalURL= CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength);

  return (
    <>
      <Head>
        <link rel="canonical" href={ canonicalURL } />
      </Head>
      <motion.main 
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{type: "linear", duration: .4}}
          id="app"
        >
          {children}
        </motion.main>
    </>
  )
}

export default Layout