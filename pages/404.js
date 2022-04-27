import Layout from './components/Layout'

import styles from '../styles/404.module.sass'

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>404</h1>
        <p>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </Layout>
  )
}