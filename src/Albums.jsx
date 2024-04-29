import React from 'react';
import useFetchData from './useFetchData';

const Albums = () => {
  const { data, isLoading, error } = useFetchData(
    'https://jsonplaceholder.typicode.com/albums'
  );

  if (isLoading) {
    return <p>Loading.......................</p>;
  }
  if (error) {
    return <p>Error........................</p>;
  }

  console.log(data);
  return (
    <>
      <p>I AM ALBUMS LIST</p>
      {data.slice(0, 15).map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </>
  );
};

export default Albums;
