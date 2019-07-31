import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className='container'>
                <div className='row'>
                  <div id='modal' className='col-8 text-center'>
                    <h3>item added</h3>
                    <img src={img} className='img-f' alt='product' />
                    <h4>{title}</h4>
                    <h4 className='text-muted'>price: ${price}</h4>
                    <Link to='/'>
                      <button onClick={() => closeModal()}>
                        Continue shopping
                      </button>
                    </Link>
                    <Link to='/cart'>
                      <button onClick={() => closeModal()}>Go to Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
