import React, { useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';

const Categories = () => {
  const { setActiveTab, categories } = useContext(DataContext);

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
    marginRight: 15,
    padding: 5,
  },
};

export default Categories;
