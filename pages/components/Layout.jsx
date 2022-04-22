import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
}

const Layout = ({children}) => {
  return (
    <motion.main 
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{type: "linear"}}
      id="app"
    >
      {children}
    </motion.main>
  )
}

export default Layout