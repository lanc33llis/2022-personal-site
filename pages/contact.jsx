import styles from '../styles/Contact.module.sass'
import Layout from './components/Layout'


export default function Contact(){
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Contact</h1>
          <h2>
            Inquires of all types is welcome. 
          </h2>
        </div>
      </div>
    </Layout>
  )
}