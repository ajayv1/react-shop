import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import { SHOP_PRODUCT_DATA } from '../data';
import { Product as ProductComp } from '../components/products/Product';


const ProductPage = (props) => {
  console.log(props.match);

  const { params } = props.match; 
  const productId = params && params.id;
  const productData = SHOP_PRODUCT_DATA[productId];

  console.log(productId, productData);

  console.log(productData);

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <section className="product-section">
          <h1 className="product-title">{productData.title}</h1>
          <ProductComp {...productData} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;