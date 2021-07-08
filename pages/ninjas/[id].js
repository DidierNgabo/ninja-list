import React from 'react';
import axios from 'axios';

export const getStaticPaths = async () => {
  const data = await (
    await axios.get('https://jsonplaceholder.typicode.com/users')
  ).data;

  const paths = data.map((user) => {
    return { params: { id: user.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).data;

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
