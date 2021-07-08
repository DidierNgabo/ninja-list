import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div >
      <h1 className={styles.title}>Hello world next</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non? Dolorem voluptate earum cupiditate blanditiis magnam vitae sint, quasi iusto repellendus sed numquam dolorum. Ut earum ad tempore alias minima?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non? Dolorem voluptate earum cupiditate blanditiis magnam vitae sint, quasi iusto repellendus sed numquam dolorum. Ut earum ad tempore alias minima?</p>
     <Link href="/ninjas"><a className={styles.btn}>see ninja listing</a></Link>
    </div>
    </>
  )
}
