import { useState, useEffect } from 'react';
import data from '../data';

const useData = () => {
  const { navCategories } = data;
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [columnOneData, setColumnOneData] = useState([]);
  const [columnTwoData, setColumnTwoData] = useState([]);

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

  const columnsData = [{ column: columnOneData }, { column: columnTwoData }];

  return { setActiveTab, columnsData, categories };
};

export default useData;
