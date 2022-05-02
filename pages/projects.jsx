import styles from '../styles/Projects.module.sass'

import Layout from './components/Layout'

export default function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Projects</h1>
          <h2>
            I do a lot of personal projects for fun but also to learn more about technologies. 
            Here are some of my favorites.
          </h2>
        </div>
      </div>
    </Layout>
  )
}