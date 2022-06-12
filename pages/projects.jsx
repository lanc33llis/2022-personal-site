import styles from '../styles/Projects.module.sass'

import Layout from './components/Layout'

export default function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Projects</h1>
          <h2>
            Some of my favorite projects from my work experience or personal projects.
          </h2>
        </div>
      </div>
    </Layout>
  )
}