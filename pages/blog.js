import styles from '../styles/Blog.module.sass'

import Layout from './components/Layout'

import Image from 'next/image'

const Blog = ({ blogs }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Blog
          </h1>
          <h2>
            Everyday and Tech Blogs from UT Austin powered by Dev.to
          </h2>
        </div>
        <div className={styles.blogs}>
          {blogs.map(blog => (
            <div className={styles.blog} key={blog.id}>
              <div className={styles.image}>
                {
                  blog.image &&
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={200}
                  />
                }
              </div>
              <div className={styles.content}>
                <h3>
                  {blog.title}
                </h3>
                <p>
                  {blog.description}
                </p>
              </div>
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


export default Blog