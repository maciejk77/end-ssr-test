import React, { Fragment } from 'react';
import useData from '../../hooks/useData';
// import Categories from '../Categories';

const Nav = () => {
  const { setActiveTab, columnsData, categories } = useData();

  const renderColumn = (data) =>
    data &&
    data.map(({ id, name }) => (
      <div style={styles.columnItem} key={id}>
        {name}
      </div>
    ));

  // this should be imported into as a component
  const Categories = () => {
    return (
      <div style={styles.nav}>
        {categories.map((category) => (
          <div
            key={category}
            style={styles.navItem}
            onMouseOver={() => setActiveTab(category)}
            onMouseLeave={() => setActiveTab(null)}
          >
            {category.toUpperCase()}
          </div>
        ))}
      </div>
    );
  };

  // this should be imported into as a component
  const Columns = () => (
    <div style={styles.categories}>
      {columnsData.map((cD, idx) => (
        <div key={idx} style={styles.column}>
          {renderColumn(cD.column)}
        </div>
      ))}
    </div>
  );

  return (
    <Fragment>
      <Categories />
      <Columns />
    </Fragment>
  );
};

const styles = {
  nav: {
    // border: '1px dotted gray',
    display: 'flex',
    padding: 10,
    fontFamily: 'Arial',
    fontSize: 15,
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
    fontSize: 14,
  },
};

export default Nav;
