import React, { Fragment } from 'react';
import useData from '../../hooks/useData';
import Header from '../Header';
import Logo from '../Logo';
// import Categories from '../Categories';

const Nav = () => {
  const { setActiveTab, columnsData, categories, images } = useData();

  const renderColumn = (data) =>
    data &&
    data.map(({ id, name }) => (
      <div style={styles.columnItem} key={id}>
        {name}
      </div>
    ));

  // this should be imported here as a Categories component
  const Categories = () => {
    return (
      <div style={styles.categories}>
        {categories.map((category) => (
          <div
            key={category}
            style={styles.category}
            onMouseOver={() => setActiveTab(category)}
          >
            {category}
          </div>
        ))}
      </div>
    );
  };

  // this should be imported here as a Columns component
  const Columns = () => (
    <div style={styles.columns}>
      {columnsData.map((cD, idx) => (
        <div key={idx} style={styles.column}>
          {renderColumn(cD.column)}
        </div>
      ))}
    </div>
  );

  // TODO fix images not showing for activeTab falsy - initial load, hover outside of nav
  // TODO iterate over images array with 2 or 4 items - see comments in useData
  // this should be imported here as a Images component
  const Images = () => (
    <div style={styles.images}>
      {images &&
        images.map((img, idx) => (
          <div key={idx} style={styles.imageItem}>
            <img src={img} alt="" width={200} height={180} />
          </div>
        ))}
    </div>
  );

  // TODO import image src here not a Logo component
  return (
    <Fragment>
      <Header>FREE UK DELIVER ON ALL ORDERS OVER £150 | FREE UK RETURNS</Header>
      <Logo>END.</Logo>
      <div onMouseLeave={() => setActiveTab(null)}>
        <Categories />
        <div style={{ display: 'flex' }}>
          <Columns />
          <Images />
        </div>
      </div>
    </Fragment>
  );
};

// TODO split styles into separate components e.g. Categories, Columns, Images
// TODO CSS in JS, i.e. styled-components for themes, variables, props
const styles = {
  categories: {
    borderBottom: '1px solid rgb(242, 242, 242)',
    borderTop: '1px solid rgb(242, 242, 242)',
    display: 'flex',
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    fontSize: '0.8rem',
    justifyContent: 'center',
    padding: '8px 16px 6px',
    textTransform: 'uppercase',
  },
  category: {
    // border: '1px dotted red',
    marginRight: 15,
    padding: 5,
  },
  columns: {
    // border: '1px dotted green',
    display: 'flex',
    paddingLeft: 50,
    paddingTop: 20,
  },
  column: {
    // border: '1px dotted blue',
    marginRight: 30,
    padding: 10,
  },
  columnItem: {
    // border: '1px dotted black',
    marginBottom: 10,
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    fontSize: 14,
  },
  images: {
    // border: '1px dotted orange',
    display: 'flex',
    flexWrap: 'wrap',
    height: 440,
    justifyContent: 'center',
    paddingBottom: 2,
    paddingRight: 2,
    width: 440,
  },
  imageItem: {
    margin: 10,
  },
};

export default Nav;
