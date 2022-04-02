import React from 'react';
import { MdOutlineMonitor } from 'react-icons/md';
import { BsEnvelope } from 'react-icons/bs';
import { MdFindInPage } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWpforms } from 'react-icons/fa';
import { BsStack } from 'react-icons/bs';
import { BsFillBarChartFill } from 'react-icons/bs';
import { BsFillPenFill } from 'react-icons/bs';

const Links = () => {
  return (
    <div>
      <div className='link'>
        <div className='left-stuff active-link'>
          <MdOutlineMonitor className='link-icon' />{' '}
          <span className='active-text'>Dashboard</span>
        </div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <BsEnvelope className='link-icon' /> Mailbox
        </div>

        <div className='side-stuff special-side'>
          <div className='special-text'>12</div>
          <div className='special-round-1'></div>
          <div className='special-round-2'></div>
        </div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <MdFindInPage className='link-icon' /> Special Pages
        </div>
        <div className='side-stuff'> &lt;</div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <FaTelegramPlane className='link-icon' /> UI Elements
        </div>

        <div className='side-stuff'> &lt;</div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <FaWpforms className='link-icon' /> Forms
        </div>

        <div className='side-stuff'> &lt;</div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <BsStack className='link-icon' /> Tables
        </div>

        <div className='side-stuff'> &lt;</div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <BsFillBarChartFill className='link-icon' /> Charts
        </div>

        <div className='side-stuff'> &lt;</div>
      </div>
      <div className='link'>
        <div className='left-stuff'>
          <BsFillPenFill className='link-icon' /> Blog
        </div>

        <div className='side-stuff'> &lt;</div>
      </div>
    </div>
  );
};

export default Links;
