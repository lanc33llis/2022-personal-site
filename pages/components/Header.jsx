import styles from '../../styles/Header.module.sass'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { LayoutGroup, motion, AnimatePresence } from 'framer-motion'

import { memo, useState, useEffect } from 'react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: ['/blog', '/blogs'] },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header>
        <Image src="/logo1.svg"  width={25} height={25}/>
        <nav>
          {links.map(({ name, href }) => (
            <Link href={Array.isArray(href) ? href[0] : href} key={name} passHref scroll={false}>
              <a className={styles.link}>
                {
                  ((Array.isArray(href) && href.includes(`/${router.pathname.split('/')[1]}`)) || (router.pathname === href)) &&
                  <motion.span
                    layoutId="nav-selected"
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
    </div>
  )
}

export default memo(Header)