import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/ninjas.module.css';

export const getStaticProps = async () => {
  const data = await (
    await axios.get('https://jsonplaceholder.typicode.com/users')
  ).data;

  return {
    props: {
      ninjas: data,
    },
  };
};

const Home = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja list | list</title>
      </Head>
      <div>
        <h2>All Ninjas</h2>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
