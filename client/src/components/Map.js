import React from 'react';
import Wimg from './../utility/data/img/WImage.png';
import './../utility/css/map.css';
import { AiFillPlusSquare } from 'react-icons/ai';
import { AiFillMinusSquare } from 'react-icons/ai';

const Map = () => {
  return (
    <div className='map-cont'>
      <div className='img-cont-map'>
        <img src={Wimg} alt='' />
        <div className='plus'>
          <AiFillPlusSquare />
        </div>
        <div className='minus'>
          <AiFillMinusSquare />
        </div>
      </div>
    </div>
  );
};

export default Map;
