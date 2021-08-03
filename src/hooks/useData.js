import { useEffect, useContext } from 'react';
import data from '../data';
import { DataContext } from '../contexts/dataContext';

const useData = () => {
  const {
    activeTab,
    columnsData,
    setColumnsData,
    images,
    setImages,
    categories,
    setCategories,
  } = useContext(DataContext);

  const { navCategories } = data;
  const [LAUNCHES, FEATURES] = ['Launches', 'Features'];

  // create a list of categories on initial load
  useEffect(() => {
    const categories = navCategories
      .map((ctg) => ctg.name)
      .filter((ctg) => ctg !== LAUNCHES) // exclude as per brief
      .filter((ctg) => ctg !== FEATURES); // no data on children_data
    setCategories(categories);
  }, []);

  // computes also on outside of menu hover? - fix needed
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

  return { columnsData, categories, images };
};

export default useData;
