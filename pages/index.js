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
    <>
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
            Astronomy major at the University of Texas at Austin with a passion for simple and elegant web design.
          </h3>
        </div>
        <div className={styles.right}>
          <span>
            San Francisco, California
          </span>
          <div className={styles["hero-image"]}/>
          <div className={styles["hero-image-bg"]}/>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.year}>
          <h2>
            2022
          </h2>
          <div className={styles.coords}>
            <div>
              <h3>
                Location
              </h3>
              <h4>
                AUSTIN, TX
              </h4>
              <h4>
                30.2849° N
              </h4>
              <h4>
                97.7341° W
              </h4>
            </div>
            <div>
              <h3>
                Elevation
              </h3>
              <h4>
                522ft
              </h4>
              <h4>
                159m
              </h4>
            </div>
            <div>
              <h3>
                Company
              </h3>
              <h4>
                Amazon (Summer)
              </h4>
              <h4>
                SDE Intern
              </h4>
              <h4>
                Los Angeles, CA
              </h4>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}
