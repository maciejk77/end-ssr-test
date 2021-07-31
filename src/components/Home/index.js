import React, { Fragment } from 'react';
import data from '../../data';

const { navCategories } = data;

const Home = () => {
  console.log(navCategories);

  return (
    <Fragment>
      {navCategories.map(({ id, category_path }) => (
        <div key={id}>{category_path}</div>
      ))}
    </Fragment>
  );
};

export default Home;
