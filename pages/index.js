import styles from '../styles/Index.module.sass'
import { useState, useEffect } from 'react'

import lerp from '../util/lerp'
import GradientText from './components/GradientText'

import Image from 'next/image'

export default function Index() {
  const [tick, setTick] = useState(1)
  const [gradColors, setGradColors] = useState([[39, 49, 182], [112, 224, 162], [182, 49, 39]])
  const [reverseTicks, setReverseTicks] = useState(false)
  const totalTicks = 500

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
    const startingColors = [[39, 49, 255], [112, 224, 162], [255, 49, 39]]
    const endingColors = [[255, 49 ,39], [112, 224, 162], [39, 49, 255]]

    const lerpedColors = startingColors.map((c, i) => lerp(c, endingColors[i], tick, totalTicks))
    setGradColors(gradColors => lerpedColors)
  }, [tick, totalTicks])

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1>
            Hello,
          </h1>
          { gradColors &&
          <GradientText gradient={gradColors}>
            <h1>
              I&apos;m Lance
            </h1>
          </GradientText>
          }
          <h2>
            Software and Web Developer
          </h2>
          <h3>
            Based in Austin, Texas with a passion for creating beautiful, minimalistic websites and applications. 
          </h3>
        </div>
        <div className={styles.right}>
          <div className={styles["hero-image"]}/>
        </div>
      </div>
      <div className={styles.content}>
      </div>
    </div>
  )
}
