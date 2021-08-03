import React, { useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';

const Columns = () => {
  const { columnsData } = useContext(DataContext);

  const renderColumn = (data) =>
    data &&
    data.map(({ id, name }) => (
      <div style={styles.columnItem} key={id}>
        {name}
      </div>
    ));

  return (
    <div style={styles.columns}>
      {columnsData.map((cD, idx) => (
        <div key={idx} style={styles.column}>
          {renderColumn(cD.column)}
        </div>
      ))}
    </div>
  );
};

const styles = {
  columns: {
    display: 'flex',
    paddingLeft: 50,
    paddingTop: 20,
  },
  column: {
    marginRight: 30,
    padding: 10,
  },
  columnItem: {
    marginBottom: 10,
    fontFamily:
      'ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial, sans-serif',
    fontSize: 14,
  },
};

export default Columns;
