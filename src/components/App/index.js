import React, { Fragment, useState, useEffect } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import Logo from '../Logo';

const App = () => {
  return (
    <Fragment>
      <Header>FREE UK DELIVER ON ALL ORDERS OVER £150 | FREE UK RETURNS</Header>
      <Logo>END.</Logo>
      <Nav />
    </Fragment>
  );
};

export default App;
