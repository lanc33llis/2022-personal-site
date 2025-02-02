import styles from '../styles/Index.module.sass'
import { useState, useEffect } from 'react'

import lerp from '../util/lerp'
import GradientText from './components/GradientText'

import Image from 'next/image'
import Link from 'next/link'

import Layout from './components/Layout'

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
    <Layout>
      <div className={styles.hero}>
        <div className={styles.left}>
          <div>
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
        </div>
        <div className={styles.right}>
          <div>
            <p>
              San Francisco, California
            </p>
            <div className={styles["hero-image"]}/>
          </div>
        </div>
      </div>
      <h2 className={styles["section-heading"]}>
        Experience
      </h2>
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
                Austin, TX
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
          <div className={styles.internship}>
            <div>
              <h3>
                Internship
              </h3>
              <h4>
                Amazon
              </h4>
              <h4>
                Summer
              </h4>
            </div>
            <div>
              <h3>
                Team
              </h3>
              <h4>
                Alexa
              </h4>
              <h4>
                Out of Box Experience
              </h4>
            </div>
            <div>
              <h3>
                Role
              </h3>
              <h4>
                SDE Intern
              </h4>
              <h4>
                Fullstack Development
              </h4>
              <h4>
                React, TypeScript, Java, CI/CD
              </h4>
            </div>
          </div>
          <div className={styles.startup}>
            <div>
              <h3>
                Startup
              </h3>
              <h4>
                Droneconia
              </h4>
              <h4>
                Autonomous Vehicle
              </h4>
              <h4>
                AI Research
              </h4>
            </div>
            <div>
              <h3>
                Stage
              </h3>
              <h4>
                MVP
              </h4>
              <h4>
                Obtained Military Contract
              </h4>
            </div>
            <div>
              <h3>
                Role
              </h3>
              <h4>
                Freelance SDE
              </h4>
              <h4>
                Fullstack Development
              </h4>
              <h4>
                DevOps, Python, Java, JS
              </h4>
            </div>
          </div>
          <div className={styles.startup}>
            <div>
              <h3>
                Startup
              </h3>
              <h4>
                LP Alpha
              </h4>
              <h4>
                Fintech SAAS
              </h4>
              <h4>
                B2B
              </h4>
            </div>
            <div>
              <h3>
                Stage
              </h3>
              <h4>
                Product Release and Development
              </h4>
              <h4>
                Customer Acquisition & Growth
              </h4>
            </div>
            <div>
              <h3>
                Role
              </h3>
              <h4>
                Freelance SDE
              </h4>
              <h4>
                Fullstack Development
              </h4>
              <h4>Vue, Django, PostgreSQL</h4>
            </div>
          </div>
        </div>
        <div className={styles.year}>
          <h2>
            2021
          </h2>
          <div className={styles.coords}>
            <div>
              <h3>
                Location
              </h3>
              <h4>
                San Antonio, TX
              </h4>
              <h4>
                29.5064° N
              </h4>
              <h4>
                98.5154° W
              </h4>
            </div>
            <div>
              <h3>
                Elevation
              </h3>
              <h4>
                761ft
              </h4>
              <h4>
                232m
              </h4>
            </div>
            <div>
              <h3>
                Company
              </h3>
              <h4>
                Major League Hacking (Summer)
              </h4>
              <h4>
                Production Engineering Fellow
              </h4>
            </div>
          </div>
          <div className={styles.research}>
            <div>
              <h3>
                Research
              </h3>
              <h4>
                N-Body Simulations
              </h4>
              <h4>
                Photometry
              </h4>
              <h4>
                Data Analysis
              </h4>
            </div>
            <div>
              <h3>
                University
              </h3>
              <h4>
                Trinity University
              </h4>
              <h4>
                Dr. Mark C. Lewis
              </h4>
              <h4>
                Elizabeth Ruetschle
              </h4>
            </div>
            <div>
              <h3>
                Paper
              </h3>
              <h4>
                Photometric Rendering of Dust and Free...
              </h4>
              <h4>
                <Link href="https://www.springer.com/series/11769" passHref>
                  <a>
                    Transactions on Computational Science...
                  </a>
                </Link>
              </h4>
              <h4>
                CSC&apos;21
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
