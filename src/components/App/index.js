import React, { Fragment, useState, useEffect } from 'react';
import { DataContext } from '../../contexts/dataContext';
import Nav from '../Nav';

const App = () => {
  const [activeTab, setActiveTab] = useState('');
  const [columnsData, setColumnsData] = useState([]);

  return (
    <Fragment>
      <DataContext.Provider
        value={{
          activeTab,
          setActiveTab,
          columnsData,
          setColumnsData,
        }}
      >
        <Nav />
      </DataContext.Provider>
    </Fragment>
  );
};

export default App;
