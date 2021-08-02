import { useState, useEffect } from 'react';
import data from '../data';

const useData = () => {
  const { navCategories } = data;
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [columnsData, setColumnsData] = useState([]);
  const [LAUNCHES, FEATURES] = ['Launches', 'Features'];

  console.log(navCategories);

  useEffect(() => {
    const categories = navCategories
      .map((ctg) => ctg.name)
      .filter((ctg) => ctg !== LAUNCHES) // exclude as per brief
      .filter((ctg) => ctg !== FEATURES); // no data on children_data
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
      subCategoriesData
        .filter((data) => !data.include_in_menu_column2)
        .filter((data) => !data.include_in_menu_column3);

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

  return { setActiveTab, columnsData, categories };
};

export default useData;
