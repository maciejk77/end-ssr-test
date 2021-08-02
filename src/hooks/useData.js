import { useState, useEffect } from 'react';
import data from '../data';

const useData = () => {
  const { navCategories } = data;
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [columnsData, setColumnsData] = useState([]);
  const [images, setImages] = useState([]);

  const [LAUNCHES, FEATURES] = ['Launches', 'Features'];

  // console.log(navCategories);
  // debugger;

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

    // this could be optimised, e.g. reduce?, GraphQL queries
    // multiple filtering on each hover over/out
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

  useEffect(() => {
    const images =
      activeTab &&
      navCategories
        .filter((category) => category.name === activeTab)
        .filter((data) => data.dropdown_image_url)
        .map((img) => img.dropdown_image_url);

    // .splice(0, `${columnsData.length === 3 ? 2 : 4}`);
    // currently serving only one image, regex can be used to find all props beginning with /dropdown_image_url/  ..._url1/2/3 etc.
    // then splice 4 or 2 depending on the number of columns 1,2 or 3 respectively
    // .splice(0, `${columnsData.length === 3 ? 2 : 4}`);
    // if there are 3 columns serve only 2 images, otherwise 4, not tested - something like that
    // needs refactor and DRYing as well

    const fourItemsArray = Array(4).fill(images); // quick hack

    // setImages(images);
    setImages(fourItemsArray);
  }, [activeTab]);

  return { setActiveTab, columnsData, categories, images };
};

export default useData;
