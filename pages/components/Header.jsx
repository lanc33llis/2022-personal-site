import styles from '../../styles/Header.module.sass'
import Link from 'next/link'

import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <Link href="/" passHref>
            <a className={router.pathname === "/" && styles.selected || ""}>
              Home
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className={router.pathname === "/about" && styles.selected || ""}>
              About
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
      </header>
    </div>
  )
}

export default Header