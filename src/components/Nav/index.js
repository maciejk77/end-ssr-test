import React, { Fragment, useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';
import Header from '../Header';
import Logo from '../Logo';
import Categories from '../Categories';
import Columns from '../Columns';
import Images from '../Images';

const Nav = () => {
  const { setActiveTab } = useContext(DataContext);

  return (
    <Fragment>
      <Header>FREE UK DELIVER ON ALL ORDERS OVER £150 | FREE UK RETURNS</Header>
      <Logo>END.</Logo>
      <div onMouseLeave={() => setActiveTab(null)}>
        <Categories />
        <div style={styles.flex}>
          <Columns />
          <Images />
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  flex: {
    display: 'flex',
  },
};

export default Nav;
