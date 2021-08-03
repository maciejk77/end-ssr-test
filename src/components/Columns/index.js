import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts/dataContext';
import data from '../../data';

const Columns = () => {
  const { activeTab, columnsData, setColumnsData } = useContext(DataContext);
  // const [columnsData, setColumnsData] = useState([]);
  const { navCategories } = data;

  useEffect(() => {
    const subCategoriesData =
      activeTab &&
      navCategories
        .filter((category) => category.name === activeTab)
        .map((category) => category.children_data)[0]
        .filter((data) => data.is_column_header !== true); // filtered out column headers

    // multiple filtering on each hover over/out?
    const columnOneData =
      subCategoriesData &&
      subCategoriesData
        .filter((data) => !data.include_in_menu_column2)
        .filter((data) => !data.include_in_menu_column3);

    // below to DRY?
    const columnTwoData =
      subCategoriesData &&
      subCategoriesData.filter((data) => !!data.include_in_menu_column2);

    const columnThreeData =
      subCategoriesData &&
      subCategoriesData.filter((data) => !!data.include_in_menu_column3);

    const columnsDataCombined = [
      { column: columnOneData },
      { column: columnTwoData },
      { column: columnThreeData },
    ];

    setColumnsData(columnsDataCombined);
  }, [activeTab]);

  const renderColumn = (data) =>
    data &&
    data.map(({ id, name }) => (
      <div style={styles.columnItem} key={id}>
        {name}
      </div>
    ));

  return (
    <div style={styles.columns}>
      {columnsData.map((cD, idx) => (
        <div key={idx} style={styles.column}>
          {renderColumn(cD.column)}
        </div>
      ))}
    </div>
  );
};

const styles = {
  columns: {
    display: 'flex',
    paddingLeft: 50,
    paddingTop: 20,
  },
  column: {
    marginRight: 30,
    padding: 10,
  },
  columnItem: {
    marginBottom: 10,
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    fontSize: 14,
  },
};

export default Columns;
