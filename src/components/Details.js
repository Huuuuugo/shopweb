import React, { Component } from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} className='img-fluid' alt='' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <h1>Name : {title}</h1>
                  <h4 className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    made by : <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='text-capitalize mt-3'>info about product :</p>
                  <p className='text-muted lead'>{info}</p>
                  <div>
                    <Link to='/'>
                      <button>back to products</button>
                    </Link>
                    <button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'in cart' : 'add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
