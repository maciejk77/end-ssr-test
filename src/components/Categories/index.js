// import React, { useEffect, useState } from 'react';
// import useData from '../../hooks/useData';
// // import 'regenerator-runtime/runtime';

// const Categories = () => {
//   const { categories, setActiveTab } = useData();

//   return (
//     <div style={styles.nav}>
//       {categories.map((category) => (
//         <div
//           key={category}
//           style={styles.navItem}
//           onMouseOver={() => setActiveTab(category)}
//           onMouseLeave={() => setActiveTab(null)}
//         >
//           {category.toUpperCase()}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   nav: {
//     // border: '1px dotted gray',
//     display: 'flex',
//     padding: 10,
//     fontFamily: 'Arial',
//     fontSize: 15,
//     justifyContent: 'center',
//   },
//   navItem: {
//     // border: '1px dotted red',
//     padding: 5,
//     marginRight: 10,
//   },
// };

// export default Categories;
