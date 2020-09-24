import React from 'react';
import Header from '../../components/header/header-container';
import ProductsList from '../products-list/products-list';
import Footer from '../../components/footer/footer';
import { connect } from 'react-redux';
import IReducedState from '../../storage/IReducedState';
import IShoppingCartState from '../../storage/ShoppingCart/IShoppingCartState';
import './prod-page.scss';

interface IProps {
  shoppingCart: IShoppingCartState,
}

function ProdPage(props: IProps) {
  const { shoppingCart } = props;

  return (
    <div className={`prod-page ${shoppingCart.isFetching ? 'prod-page_disabled' : ''}`}>
      <div className='prod-page__header'>
        <Header />
      </div>
      <div className='prod-page__products-list'>
        <ProductsList />
      </div>
      <div className='prod-page__footer'>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = function (state: IReducedState) {
  return state;
};
export default connect(mapStateToProps)(ProdPage);
