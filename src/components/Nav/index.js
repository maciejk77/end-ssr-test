import React, { useState, Fragment } from 'react';
import data from '../../data';

const { navCategories } = data;

const Nav = () => {
  const [activeTab, setActiveTab] = useState([]);

  // console.log(navCategories);

  const categoriesNav = navCategories.map(({ id, category_path }) => (
    <div
      key={id}
      style={styles.navItem}
      onMouseOver={() => setActiveTab(category_path)}
      onMouseLeave={() => setActiveTab(null)}
    >
      {category_path.toUpperCase()}
    </div>
  ));

  const categoryList = navCategories.filter((nC) => nC.name === activeTab);

  const subCategory =
    categoryList[0] &&
    categoryList[0]['children_data'].map((data) => (
      <div key={data.id}>{data.name}</div>
    ));

  return (
    <Fragment>
      <div style={styles.nav}>{categoriesNav}</div>
      <div>{subCategory}</div>
    </Fragment>
  );
};

const styles = {
  nav: {
    // border: '1px dotted gray',
    display: 'flex',
    padding: 10,
    fontFamily: 'Arial',
    fontSize: 13,
    justifyContent: 'center',
  },
  navItem: {
    // border: '1px dotted red',
    padding: 5,
    marginRight: 10,
  },
};

export default Nav;
