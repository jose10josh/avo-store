import React from 'react';
import Link from 'next/link';

import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav_menu}>
        <menu>
          <Link className='menu_anchor' href='/'>Home</Link>
          <Link className='menu_anchor' href='/about'>About</Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;