import Head from 'next/head'
import { useState } from 'react'

import styles from '../styles/Home.module.css'

const Home = (props: any) => {
  const [myPosts, setMyPosts] = useState(props.posts)

  return (
    <>
      <Head>
        <title>MY CRA MANAGER </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to CRA MANAGER</h1>
        {myPosts.map((post: any) => (
          <p>{post.title}</p>
        ))}
      </main>
    </>
  )
}


export  const  getStaticProps= async () => {
  const posts =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(response => response.json())
  return {
    props: {
      posts
    }
  }

}
export default Home
