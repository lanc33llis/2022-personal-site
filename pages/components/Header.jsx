import styles from '../../styles/Header.module.sass'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { LayoutGroup, motion } from 'framer-motion'

import { memo } from 'react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: ['/blog', '/blogs'] },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Nav = memo(({ router }) => (
  // <LayoutGroup>
    <motion.nav layout>
      {links.map(({ name, href }) => (
        <Link href={Array.isArray(href) ? href[0] : href} key={name} passHref>
          <a className={styles.link}>
            {
              ((Array.isArray(href) && href.includes(`/${router.pathname.split('/')[1]}`)) || (router.pathname === href)) &&
              <motion.span
                layoutId="nav-selected"
                className={styles.active}
                animate={{x: 0}}
              />
            }
            {name}
          </a>
        </Link>
      ))}
    </motion.nav>
  // </LayoutGroup>
))
Nav.displayName = 'Nav'

const Header = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header>
        <span>
          Lance Ellis
        </span>
        <Nav router={router}/>
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