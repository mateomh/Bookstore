import React from 'react';
import NavBarStyles from './styles/navbar.module.css';

const NavBar = () => (
  <div className={NavBarStyles.Navbar}>
    <div className={NavBarStyles.NavContent}>
      <div className={NavBarStyles.NavLinks}>
        <span className={NavBarStyles.NavTitle}>
          Bookstore CMS
        </span>
        <span className={NavBarStyles.NavBooks}>
          Books
        </span>
        <span className={NavBarStyles.NavCategories}>
          Categories
        </span>
        <div className={NavBarStyles.NavUser} />
      </div>
    </div>
  </div>
);

export default NavBar;
