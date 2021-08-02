import React, { Fragment } from 'react';
import useData from '../../hooks/useData';
import Header from '../Header';
import Logo from '../Logo';
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
      <div style={styles.categories}>
        {categories.map((category) => (
          <div
            key={category}
            style={styles.category}
            onMouseOver={() => setActiveTab(category)}
          >
            {category}
          </div>
        ))}
      </div>
    );
  };

  // this should be imported into as a component
  const Columns = () => (
    <div style={styles.columns}>
      {columnsData.map((cD, idx) => (
        <div key={idx} style={styles.column}>
          {renderColumn(cD.column)}
        </div>
      ))}
    </div>
  );

  return (
    <Fragment>
      <Header>FREE UK DELIVER ON ALL ORDERS OVER £150 | FREE UK RETURNS</Header>
      <Logo>END.</Logo>
      <div onMouseLeave={() => setActiveTab(null)}>
        <Categories />
        <Columns />
      </div>
    </Fragment>
  );
};

const styles = {
  categories: {
    borderTop: '1px solid rgb(242, 242, 242)',
    borderBottom: '1px solid rgb(242, 242, 242)',
    display: 'flex',
    padding: '8px 16px 6px',
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    justifyContent: 'center',
  },
  category: {
    // border: '1px dotted red',
    padding: 5,
    marginRight: 15,
  },
  columns: {
    display: 'flex',
    paddingTop: 20,
    paddingLeft: 50,
  },
  column: {
    // border: '1px dotted red',
    marginRight: 30,
    padding: 10,
  },
  columnItem: {
    // border: '1px dotted green',
    marginBottom: 10,
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    fontSize: 14,
  },
};

export default Nav;
