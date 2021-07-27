import React from 'react';

const ProductItem = ({imgUrl, alt, title, desc, price, colors, showInShort}) => {
  return (
    <div className={`product ${showInShort ? 'short' : ''}`}>
      <img src={imgUrl} alt={alt} />
      <h2 className="product-title mt-5">{title}</h2>
      {
        !showInShort && <p className="product-desc mt-5">{desc}</p>
      }
      <h3 className="product-price mt-5">{price}</h3>
      {
        !showInShort && <ul className="product-color mt-5">
          {
            colors && colors.map((color) => <li className={color}>{color}</li>)
          }
        </ul>
      }
    </div>
  );
};

export default ProductItem;