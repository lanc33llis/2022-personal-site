import styles from '../../styles/Header.module.sass'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { LayoutGroup, motion } from 'framer-motion'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const router = useRouter()

  return (
    <LayoutGroup>
      <div className={styles.container}>
        <header>
          <span>
            Lance Ellis
          </span>
          <nav>
            {links.map(({ name, href }) => (
              <Link href={href} key={name} passHref>
                <a className={styles.link}>
                  {
                    router.pathname === href &&
                    <motion.span
                      layoutId="nav-selected"
                      animate
                      className={styles.active}
                    />
                  }
                  {name}
                </a>
              </Link>
            ))}
            {/* <Link href="/" passHref>
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
            </Link> */}
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
    </LayoutGroup>
  )
}

export default Header