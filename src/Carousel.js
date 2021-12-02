import React from 'react';
import './Carousel.scss';

const Carousel = () => {
  return (
    <div className="container">
      <ul className="slider">
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
      </ul>
      <div className="controls">
        <button className="prev">Prev</button>
        <div className="progress-bar"></div>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
