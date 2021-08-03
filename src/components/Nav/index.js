import React, { Fragment, useState } from 'react';
import { DataContext } from '../../contexts/dataContext';
import Categories from '../Categories';
import Columns from '../Columns';
import Images from '../Images';

const Nav = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <Fragment>
      <DataContext.Provider value={{ activeTab, setActiveTab }}>
        <div onMouseLeave={() => setActiveTab(null)}>
          <Categories />
          <div style={styles.flexRow}>
            <Columns />
            <Images />
          </div>
        </div>
      </DataContext.Provider>
    </Fragment>
  );
};

const styles = {
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Nav;
