import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Map from './Map';
import VisitorStats from './VisitorStats';
import './../utility/css/webpage.css';
const Webpage = () => {
  return (
    <div>
      <section className='partition'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='right-side'>
          <section className='header'>
            <Navbar />
          </section>
          <section className='misc'></section>
          <section className='stats'>
            <Stats />
          </section>
          <section className='map-stats'>
            <div className='map'>
              <Map />
            </div>
            <div className='visitors'>
              <VisitorStats />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Webpage;
