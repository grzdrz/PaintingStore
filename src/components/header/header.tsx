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

interface IState {
  isClosed: boolean,
}

class Header extends React.Component<IProps, IState> {
  /* public logoRef = React.createRef<>(); */

  constructor(props: IProps) {
    super(props);
    this.state = {
      isClosed: false,
    };
  }

  handleBurgerClick = () => {
    this.setState({
      isClosed: !this.state.isClosed,
    });
    /* this.logoContainer.classList.toggle('header__colored-logo_closed');
    this.burger.classList.toggle('header__burger_closed');
    this.burgerElements.forEach((element) => element.classList.toggle('header__burger-element_opened'));
    this.navigationMenu.classList.toggle('header__navigation-menu_closed');
    if (this.buttons) this.buttons.classList.toggle('header__buttons_closed');
    if (this.userFullName) this.userFullName.classList.toggle('header__user-full-name_closed'); */
  }

  render() {
    const { isClosed } = this.state;

    return (
      <header className='header'>
        <div className='header__container'>
          <div className={`header__logo ${isClosed ? 'header__colored-logo_closed' : ''}`}>
            <Logo />
            <div className={`header__burger ${isClosed ? 'header__burger_closed' : ''}`} onClick={this.handleBurgerClick}>
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
              searchBarAction={this.props.searchBarAction}
            />
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = function (state: IReducedState) {
  return state;
};
export default connect(mapStateToProps, actions)(Header);
