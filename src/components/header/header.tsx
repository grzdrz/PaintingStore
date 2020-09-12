import React from 'react';
import Logo from '../logo/logo';
import NavigationBar from '../navigation-bar/navigation-bar';
import SearchBar from '../search-bar/search-bar';
import './header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>
      <div className='header__navigation-bar'>
        <NavigationBar />
      </div>
      <div className='header__search-bar'>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
