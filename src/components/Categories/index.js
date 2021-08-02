// TODO - Tried to split Nav and import e.g. Categories component from here
// TODO - Some problem ocurred with not showing Columns
// TODO - Look into custom hook useData vs Context API to resolve this?

import useData from '../../hooks/useData';

const Categories = () => {
  const { categories, setActiveTab } = useData();

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
  nav: {
    // border: '1px dotted gray',
    display: 'flex',
    padding: 10,
    fontFamily: 'Arial',
    fontSize: 15,
    justifyContent: 'center',
  },
  navItem: {
    // border: '1px dotted red',
    padding: 5,
    marginRight: 10,
  },
};

export default Categories;
