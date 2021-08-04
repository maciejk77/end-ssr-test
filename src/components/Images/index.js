import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts/dataContext';
import data from '../../data';

const Images = () => {
  const { navCategories } = data;
  const { activeTab } = useContext(DataContext);
  const [images, setImages] = useState([]);

  const fourImagesArray = () => {
    const data =
      activeTab &&
      navCategories.filter((category) => category.name === activeTab);

    if (data) {
      const dataObjectValues = Object.values(data[0]);
      return dataObjectValues
        .filter((value) => value.toString().match(/^https:/))
        .splice(0, 4);
    }
  };

  useEffect(() => {
    const images = fourImagesArray();
    setImages(images);
  }, [activeTab]);

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
