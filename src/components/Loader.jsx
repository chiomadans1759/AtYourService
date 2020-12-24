import React from 'react';

const Loader = ({height}) => {
  return (
    <div style={{height: `${height}px`}} className="loader">
      <p></p>
      <b></b>
    </div>
  );
};

export default Loader;
