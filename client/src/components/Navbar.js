import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import { IoIosKeypad } from 'react-icons/io';
import './../utility/css/navbar.css';

const Navbar = () => {
  return (
    <div className='nav-cont'>
      <div className='left-nav'>
        <div className='sidebar-btn'>
          <button className='btn btn-primary'>
            <div className='bars'>
              <FaBars />
            </div>
          </button>
        </div>
        <div className='logo'>
          <h1>BONANZOOKA</h1>
        </div>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <div className='search-icon'>
            <AiOutlineSearch className='logo-icon' />
          </div>
        </div>
      </div>
      <div className='right-nav'>
        <div className='notifs'>
          <div className='notif-1 notif'>
            <BsEnvelopeOpen className='notif-1-icon' />
            <div className='number'>4</div>
          </div>
          <div className='notif-2 notif'>
            <AiOutlineBell className='notif-2-icon' />
            <div className='number'>10</div>
          </div>
          <div className='notif-3 notif'>
            <GiNotebook className='notif-3-icon' />
            <div className='number'>9</div>
          </div>
          <div className='notif-4'>
            <IoIosKeypad className='notif-4-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
