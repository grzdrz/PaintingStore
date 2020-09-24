import React, { useState } from 'react';

import ISearchBarAction from '../../storage/SearchBar/actions/ISearchBarAction';
import Logo from '../logo/logo';
import NavigationBar from '../navigation-bar/navigation-bar';
import SearchBar from '../search-bar/search-bar';

import './header.scss';

interface IProps {
  searchBarAction?: (text: string) => ISearchBarAction,
}

function Header(props: IProps) {
  const { searchBarAction } = props;

  const [isClosed, setIsClosed] = useState(false);

  const handleBurgerClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <div className={`header__logo ${isClosed ? 'header__colored-logo_closed' : ''}`}>
          <Logo />
          <div className={`header__burger ${isClosed ? 'header__burger_closed' : ''}`} onClick={handleBurgerClick}>
            <span className={`header__burger-element ${isClosed ? '' : 'header__burger-element_opened'}`}></span>
            <span className={`header__burger-element ${isClosed ? '' : 'header__burger-element_opened'}`}></span>
            <span className={`header__burger-element ${isClosed ? '' : 'header__burger-element_opened'}`}></span>
          </div>
        </div>
        <div className={`header__navigation-bar ${isClosed ? 'header__navigation-bar_closed' : ''}`}>
          <NavigationBar />
        </div>
        <div className={`header__search-bar ${isClosed ? 'header__search-bar_closed' : ''}`}>
          <SearchBar
            searchBarAction={searchBarAction}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;


