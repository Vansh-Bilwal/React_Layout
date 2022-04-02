import React from 'react';
import Pimg from './../utility/data/img/persondp.jfif';
import './../utility/css/sidebar.css';
import { MdAccountCircle } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import Links from './Links';

const Sidebar = () => {
  return (
    <div className='side-cont'>
      <div className='basic-info'>
        <div className='img-cont'>
          <img className='p-img' src={Pimg} alt='' />
          <div className='active'></div>
        </div>
        <p className='intro'>
          Hello, <strong>Vansh</strong>Bilwal
        </p>
        <div className='icons'>
          <MdAccountCircle className='icon' />
          <FiSettings className='icon' />
          <AiOutlineLogout className='icon' />
        </div>
      </div>
      <div className='links'>
        <Links />
      </div>
      <div className='progress'>
        <div className='progress-stat'>
          <p>Profile Complete</p>
          <p>70%</p>
        </div>
        <div className='full-line'>
          <div className='percent-line-70'></div>
        </div>
        <div className='progress-stat'>
          <p>Data Usage</p>
          <p>37%</p>
        </div>

        <div className='full-line'>
          <div className='percent-line-37'></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
