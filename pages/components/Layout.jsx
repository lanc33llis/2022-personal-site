import { motion } from "framer-motion"


const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
}

const Layout = ({children, key}) => {
  return (
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
  )
}

export default Layout