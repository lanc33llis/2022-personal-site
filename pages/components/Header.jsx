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

const Header = () => {
  const router = useRouter()

  return (
    <motion.div className={styles.container}>
      <header>
        <span>
          Lance Ellis
        </span>
        <nav>
          {links.map(({ name, href }) => (
            <Link href={Array.isArray(href) ? href[0] : href} key={name} passHref scroll={false}>
              <a className={styles.link}>
                {
                  ((Array.isArray(href) && href.includes(`/${router.pathname.split('/')[1]}`)) || (router.pathname === href)) &&
                  <motion.span
                    layoutId="nav-selected"
                    animate={() => { window.scrollTo(0, 0); return {opacity: 1};}}
                    className={styles.active}
                  />
                }
                {name}
              </a>
            </Link>
          ))}
        </nav>
        <span style={{paddingTop: "4px"}}>
          <Link href="https://github.com/lanc33llis" passHref>
            <a className={styles.github}>
              <Image src="/Github.svg" alt="Github" width={32} height={32} />
            </a>
          </Link>
        </span>
      </header>
    </motion.div>
  )
}

export default memo(Header)