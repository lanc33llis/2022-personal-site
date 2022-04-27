import Layout from '../components/Layout'
import styles from '../../styles/BlogEntry.module.sass'

import moment from 'moment'

export default function BlogEntry({ blog }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>
          { blog.title }
        </h1>
        <h2>
          { blog.description }
        </h2>
        <h3>
          { blog.tags.map((tag, i, arr) => (
            <span key={tag}>
              { tag }{ i + 1 != arr.length ? ` - ` : "" }
            </span>
          )) }
        </h3>
        <h4>
          { moment(blog["published_timestamp"]).format('MM/DD/YYYY, h:mm a') }
        </h4>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: blog.body_html}}/>
      </div>
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`https://dev.to/api/articles/lanc33llis/${params.blog}`)
  const data = await res.json()

  if (data?.error) {
    throw new Error(data.error)
  }

  return {
    props: {
      blog: data
    },
    revalidate: 60 * 60 * 8
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://dev.to/api/articles/me', { headers: { 'API_KEY': process.env.DEVTO_API_KEY } })
  const data = await res.json()

  const paths = data.map(blog => ({ params: { blog: blog.slug } }))

  return {
    paths,
    fallback: "blocking"
  }
}
