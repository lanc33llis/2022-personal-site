import styles from '../../styles/Header.module.sass'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { LayoutGroup, motion, AnimatePresence } from 'framer-motion'

import { memo, useState, useEffect } from 'react'
import GradientText from './GradientText'
import lerp from '../../util/lerp'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: ['/blog', '/blogs'] },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const router = useRouter()

  const [tick, setTick] = useState(1)
  const [gradColors, setGradColors] = useState([[39, 49, 182], [112, 224, 162], [182, 49, 39]])
  const [reverseTicks, setReverseTicks] = useState(false)
  const totalTicks = 500

  const [docWidth, setDocWidth] = useState(0)

  useEffect(() => {
    setDocWidth(document.documentElement.clientWidth)
    window.onresize = () => {
      setDocWidth(document.documentElement.clientWidth)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (reverseTicks) {
        if (tick === 1) {
          setReverseTicks(false)
        } else {
          setTick(tick - 1)
        }
      } else {
        if (tick === totalTicks) {
          setReverseTicks(true)
        } else {
          setTick(tick + 1)
        }
      }
    }, 10)
    return () => clearInterval(interval)
  }, [tick, reverseTicks])

  useEffect(() => {
    const startingColors = [[255,165,0], [238,130,238], [131,238,131]]
    const endingColors = [[130, 134, 238], [243, 41, 31], [245, 216, 166]]

    const lerpedColors = startingColors.map((c, i) => lerp(c, endingColors[i], tick, totalTicks))
    setGradColors(gradColors => lerpedColors)
  }, [tick, totalTicks])

  return (
    <LayoutGroup>
      <div className={styles.container}>
        <header>
          <GradientText gradient={gradColors}>
            { docWidth > 655 && 
              <h2>
                Lance Ellis
              </h2> ||
              <h2>
                LE
              </h2>
            }
          </GradientText>
          <nav>
            {links.map(({ name, href }) => (
              <Link href={Array.isArray(href) ? href[0] : href} key={name} passHref scroll={false}>
                <a className={styles.link}>
                  {
                    ((Array.isArray(href) && href.includes(`/${router.pathname.split('/')[1]}`)) || (router.pathname === href)) &&
                    <motion.span
                      layoutId="nav-selected"
                      className={styles.active}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
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
    </LayoutGroup>
  )
}

export default memo(Header)