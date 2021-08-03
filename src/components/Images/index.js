import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts/dataContext';
import data from '../../data';

const Images = () => {
  const { activeTab } = useContext(DataContext);
  const [images, setImages] = useState([]);
  const { navCategories } = data;

  useEffect(() => {
    const images =
      activeTab &&
      navCategories
        .filter((category) => category.name === activeTab)
        .filter((data) => data.dropdown_image_url)
        .map((img) => img.dropdown_image_url);

    const fourItemsArray = Array(4).fill(images); // quick hack

    // setImages(images);
    setImages(fourItemsArray);
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
