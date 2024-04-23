/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  const {image,titleText,price,rating,pdesc}=props
  return (
      <article className="product" >
      <img src={image} alt="" />
      <div className="product__details" >
        <h4 className="product__title">{titleText}</h4>
        <p>Price:{price}</p>
        <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        <p className="product__desc">Description: {pdesc}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
