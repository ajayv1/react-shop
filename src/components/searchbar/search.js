import React, { useState } from 'react';
import SHOP_DATA from '../../data';
import ProductItem from '../products/ProductItem';
import { Link } from 'react-router-dom';

const Search = () => {
  const [term, setTerm] = useState('');
  const [data, setData] = useState([]);

  function handleChange(e) {
    var val = e.target.value;
    var res = [];

    setTerm(val);

    if (val) {
      for (let items in SHOP_DATA) {
        for (let item of SHOP_DATA[items]) {
          if (item.title && (item.title.toLowerCase()).indexOf(val.toLowerCase()) !== -1) {
            res.push(item);
          }
        }
      }
    }

    setData(res);

    console.log(data);
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type your product e.g IPhone" 
        value={term}
        onChange={(e) => handleChange(e)}
      />

      {
        data.length > 0 && data.map((product) => {
          return (
            <Link className="anchor" to={`/product/${product.id}`}>
              <ProductItem key={product.id} {...product} showInShort={true} />
            </Link>
          );
        })
      }

    </div>
  );
};

export default Search;