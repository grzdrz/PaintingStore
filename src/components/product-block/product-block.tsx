import formateNumber from '../../assets/helpers';
import compilationOptions from '../../compilationOptions';
import React from 'react';
import IProduct from '../../storage/Products/IProduct';
import Button from '../button/button';
import './product-block.scss'
import buyingButtonAction from '../../storage/BuyingButton/actions/BuyingButtonAction';

interface IProps {
  product: IProduct,
  productsInCart: Array<number>,
  buyingProductAction: typeof buyingButtonAction,
}

class ProductBlock extends React.Component<IProps> {

  async handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { product, buyingProductAction } = this.props;

    buyingProductAction({
      isFetching: true,
    });

    const url = `https://jsonplaceholder.typicode.com/posts/${product.id}`;
    const response = await fetch(url);

    const breakpoint = 1412;
    if (response.ok) {
      const json = await response.json();
      buyingProductAction({
        isFetching: false,
        productId: product.id,
      });
    } else {
      buyingProductAction({
        isFetching: false,
      });
    }
  }

  render() {
    const {
      product,
      productsInCart,
    } = this.props;

    const hasInCart = productsInCart.includes(product.id);

    return (
      <div className={`product-block ${product.isSold ? 'product-block_is-sold' : ''}`}>
        <div className='product-block__image-container'>
          <img
            className='product-block__image'
            src={`${compilationOptions.forGithubPages ? '/Redsoft_Task' : ''}/src/data/images/painting-${product.id}.jpg`}
          />
        </div>
        <div className='product-block__description'>
          <p className='product-block__name-and-author'>
            <span className='product-block__name'>{`«${product.name}»`}</span>
            <span className='product-block__author'>{product.author}</span>
          </p>
          {product.isSold
            ? (
              <p className='product-block__sold-text'>Продана на аукционе</p>
            )
            : (
              <div className='product-block__prices-and-buying-button'>
                <div className='product-block__prices'>
                  {product.oldPrice !== undefined
                    ? (
                      <p className='product-block__old-price'>
                        <span className='product-block__old-price-number'>{`${formateNumber(product.oldPrice)} ${product.currencyType}`}</span>
                      </p>
                    ) : null}
                  <p className='product-block__price'>
                    <span className='product-block__price-number'>{`${formateNumber(product.price)} ${product.currencyType}`}</span>
                  </p>
                </div>
                <div className='product-block__buying-button'>
                  <Button
                    text='Купить'
                    withCheckMark={hasInCart}
                    handleClick={this.handleButtonClick.bind(this)}
                  />
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default ProductBlock;
