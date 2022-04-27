import styles from '../styles/Blog.module.sass'

import Layout from './components/Layout'

import Image from 'next/image'
import Link from 'next/link'

import moment from 'moment'

export default function Blog({ blogs }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Blog
          </h1>
          <h2>
            Life and tech blogs powered by DEV
          </h2>
        </div>
        <div className={styles.blogs}>
          {blogs.map(blog => (
            <div className={styles.blog} key={blog.id}>
              <Link href={{pathname: '/blogs/[blog]/', query: {blog: blog.slug}}} passHref>
                <a>
                  <div className={styles.content}>
                    <h3>
                      {blog.title}
                    </h3>
                    <h4>
                      {moment(blog["published_timestamp"]).format('MM/DD/YYYY, h:mm a')}
                    </h4>
                    <h4>
                      {blog.tag_list.map((tag, i, arr) => (
                        <span key={tag}>
                          {tag}{i + 1 != arr.length ? ` - ` : ""}
                        </span>
                      ))}
                    </h4>
                    <p>
                      {blog.description}
                    </p>
                    <p>
                      Read More
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps (ctx) {
  const res = await fetch('https://dev.to/api/articles/me', { headers: { 'API_KEY': process.env.DEVTO_API_KEY } })
  const data = await res.json()

  return {
    props: {
      blogs: data
    },
    revalidate: 60 * 60 * 8 //8hrs
  }
}
