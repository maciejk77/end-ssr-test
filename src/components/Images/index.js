import React, { useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';
import useData from '../../hooks/useData';

const Images = () => {
  const { activeTab } = useContext(DataContext);
  const { images } = useData();

  return (
    activeTab && (
      <div style={styles.images}>
        {images &&
          images.map((img, idx) => (
            <div key={idx} style={styles.imageItem}>
              <img src={img} alt="" width={200} height={180} />
            </div>
          ))}
      </div>
    )
  );
};

const styles = {
  images: {
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

export default Images;
