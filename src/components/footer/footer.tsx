import React from 'react';
import Logo from '../logo/logo';
import NavigationBar from '../navigation-bar/navigation-bar';
import PhoneSymbol from './images/phone-symbol';
import AddressSymbol from './images/address-symbol';
import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <Logo />
      </div>
      <div className='footer__navigation-bar'>
        <NavigationBar />
      </div>
      <p className='footer__phone'><PhoneSymbol />+7 (495) 555-55-55</p>
      <p className='footer__address'><AddressSymbol />г. Москва, ул. Расплетина, 24</p>
    </footer>
  );
}

export default Footer;
