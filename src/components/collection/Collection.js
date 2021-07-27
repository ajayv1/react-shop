import React from 'react';
import ProductItem from '../products/ProductItem';
import { Link } from 'react-router-dom';

export const Collection = ({ data }) => {
  return (
    <div className="products">
      {
        data.map((product) => {
          return (
            <Link className="anchor" to={`/product/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          );
        })
      }
    </div>
  );
};

