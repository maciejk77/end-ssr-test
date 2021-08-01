import React, { Fragment } from 'react';
import useData from '../../hooks/useData';

const Nav = () => {
  const { setActiveTab, columnsData, categories } = useData();

  const renderColumn = (data) =>
    data &&
    data.map(({ id, name }) => (
      <div style={styles.columnItem} key={id}>
        {name}
      </div>
    ));

  const categoriesNav = categories.map((category) => (
    <div
      key={category}
      style={styles.navItem}
      onMouseOver={() => setActiveTab(category)}
      onMouseLeave={() => setActiveTab(null)}
    >
      {category.toUpperCase()}
    </div>
  ));

  return (
    <Fragment>
      <div style={styles.nav}>{categoriesNav}</div>
      <div style={styles.categories}>
        {columnsData.map((cD, idx) => (
          <div key={idx} style={styles.column}>
            {renderColumn(cD.column)}
          </div>
        ))}
      </div>
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
  categories: {
    display: 'flex',
  },
  column: {
    // border: '1px dotted red',
    marginRight: 10,
    padding: 10,
  },
  columnItem: {
    // border: '1px dotted green',
    marginBottom: 10,
    fontFamily: 'Arial',
    fontSize: 13,
  },
};

export default Nav;
