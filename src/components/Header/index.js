import React from 'react';

const Header = ({ children }) => <div style={styles.header}>{children}</div>;

const styles = {
  header: {
    backgroundColor: 'rgb(232, 232, 232)',
    padding: 10,
    color: 'black',
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    fontSize: '.7rem',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Header;
