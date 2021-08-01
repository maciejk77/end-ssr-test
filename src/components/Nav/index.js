import React, { useState, useEffect, Fragment } from 'react';
import data from '../../data';

const { navCategories } = data;

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [columnOneData, setColumnOneData] = useState([]);
  const [columnTwoData, setColumnTwoData] = useState([]);

  // console.log(navCategories);

  useEffect(() => {
    const categories = navCategories.map((ctg) => ctg.name);
    setCategories(categories);
  }, []);

  useEffect(() => {
    const subCategoriesData =
      activeTab &&
      navCategories
        .filter((category) => category.name === activeTab)
        .map((category) => category.children_data)[0]
        .filter((data) => data.is_column_header !== true); // filter out column headers

    const columnOneData =
      subCategoriesData &&
      subCategoriesData.filter(
        (data) => data.include_in_menu_column2 === undefined
      );

    const columnTwoData =
      subCategoriesData &&
      subCategoriesData.filter((d) => d.include_in_menu_column2 !== undefined);

    setColumnOneData(columnOneData);
    setColumnTwoData(columnTwoData);
  }, [activeTab]);

  const renderColumn = (data) =>
    data &&
    data.map(({ id, name }) => (
      <div style={styles.columnItem} key={id}>
        {name}
      </div>
    ));

  const columnsData = [{ column: columnOneData }, { column: columnTwoData }];

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
