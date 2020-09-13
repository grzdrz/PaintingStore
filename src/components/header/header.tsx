import React from 'react';
import { connect } from 'react-redux';
import IReducedState from '../../storage/IReducedState';
import ISearchBarAction from '../../storage/SearchBar/actions/ISearchBarAction';
import Logo from '../logo/logo';
import NavigationBar from '../navigation-bar/navigation-bar';
import SearchBar from '../search-bar/search-bar';
import actions from './actions';
import './header.scss';

interface IProps {
  searchBarAction: (text: string) => ISearchBarAction,
}

function Header(props: IProps) {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>
      <div className='header__navigation-bar'>
        <NavigationBar />
      </div>
      <div className='header__search-bar'>
        <SearchBar
          searchBarAction={props.searchBarAction}
        />
      </div>
    </header>
  );
}
const mapStateToProps = function (state: IReducedState) {
  return state;
};
export default connect(mapStateToProps, actions)(Header);
