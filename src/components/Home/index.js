import React, { Fragment, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </Fragment>
  );
};

export default Home;
