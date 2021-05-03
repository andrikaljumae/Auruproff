import React, { useState } from 'react';
import * as Bars from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Data } from './Data';
import '../styles/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='bars'>
            <Bars.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'menu active' : 'menu'}>
          <ul className='menu-items' onClick={showSidebar}>
            {Data.map((item, index) => {
              return (
                <li key={index} className={item.classname}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;