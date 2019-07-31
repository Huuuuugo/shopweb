import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className='card'>
        <ProductConsumer>
          {value => {
            return (
              <div
                className='img-container p-5'
                onClick={() => value.handleDetail(id)}
              >
                <Link to='/details'>
                  <img src={img} width='60px' height='50px' alt='' />
                </Link>
                <button
                  className='cart-btn'
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className='text-capitalize mb-0' disabled>
                      in cart
                    </p>
                  ) : (
                    <i className='fas fa-cart-plus' />
                  )}
                </button>
              </div>
            );
          }}
        </ProductConsumer>
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </div>
      </div>
    );
  }
}
