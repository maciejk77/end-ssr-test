import React, { Fragment, useState } from 'react';
import { DataContext } from '../../contexts/dataContext';
import Nav from '../Nav';

const App = () => {
  const [activeTab, setActiveTab] = useState('');
  const [columnsData, setColumnsData] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <Fragment>
      <DataContext.Provider
        value={{
          activeTab,
          setActiveTab,
          columnsData,
          setColumnsData,
          images,
          setImages,
          categories,
          setCategories,
        }}
      >
        <Nav />
      </DataContext.Provider>
    </Fragment>
  );
};

export default App;
