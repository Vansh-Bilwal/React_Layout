import React from 'react';
import { ImDownload } from 'react-icons/im';
import { MdInsertChartOutlined } from 'react-icons/md';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { GiRadioTower } from 'react-icons/gi';
import './../utility/css/stats.css';

const Stats = () => {
  return (
    <div className='stats-cont'>
      <div className=' single-stat stat-1'>
        <div className='stat-icon'>
          <ImDownload />
        </div>
        <div className='stat-info'>
          <h1>74,531</h1>
          <p>Sales</p>
        </div>
      </div>
      <div className='single-stat stat-2'>
        <div className='stat-icon'>
          <MdInsertChartOutlined />
        </div>
        <div className='stat-info'>
          <div className='stat-number'>
            <h1>
              53 <span style={{ fontSize: '0.7em ' }}>%</span>
            </h1>
          </div>

          <p>Bounce Rate</p>
        </div>
      </div>
      <div className='single-stat stat-3'>
        <div className='stat-icon'>
          <AiOutlineCloudServer />
        </div>
        <div className='stat-info'>
          <h1>
            <span style={{ fontSize: '0.7em ' }}>45%</span>/100%
          </h1>
          <p>Server Status</p>
        </div>
      </div>
      <div className='single-stat stat-4'>
        <div className='stat-icon'>
          <GiRadioTower />
        </div>
        <div className='stat-info'>
          <h1>Good</h1>
          <p>Signal Status</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
