import styles from '../../styles/Header.module.sass'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'


const Header = () => {
  const router = useRouter()

  const variants = {
    enter: {
      left: ""
    }
  }
  if (router.pathname === '/') {
    variants.enter.left = "calc(50% - 167px)"
  } else if (router.pathname === '/about') {
    variants.enter.left = "calc(50%)"
  } else if (router.pathname === '/projects') {
    variants.enter.left = "calc(50% - 167px)"
  } else if (router.pathname === '/contact') {
    variants.enter.left = "calc(50% - 167px)"
  } 

  return (
    <div className={styles.container}>
      <header>
        <span>
          Lance Ellis
        </span>
        <nav>
          <Link href="/" passHref>
            <a className={router.pathname === "/" && styles.selected || ""}>
              Home
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a className={router.pathname === "/blog" && styles.selected || ""}>
              Blog
            </a>
          </Link>
          <Link href="/projects" passHref>
            <a className={router.pathname === "/projects" && styles.selected || ""}>
              Projects
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className={router.pathname === "/contact" && styles.selected || ""}>
              Contact
            </a>
          </Link>
        </nav>
        <span style={{paddingTop: "4px"}}>
          <Link href="https://github.com/lanc33llis" passHref>
            <a className={styles.github}>
              <Image src="/Github.svg" alt="Github" width={32} height={32} />
            </a>
          </Link>
        </span>
      </header>
    </div>
  )
}

export default Header