import React from 'react';

const Logo = ({ children }) => <h1 style={styles.logo}>{children}</h1>;

const styles = {
  logo: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Helvetica, sans-serif',
  },
};

export default Logo;
