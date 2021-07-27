import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import SHOP_DATA from '../data';
import { Collection as CollectionComp } from '../components/collection/Collection';


const Collection = (props) => {
  console.log(props);

  const { params } = props.match; 
  const collectionHandle = params && params.handle;
  const collectionData = SHOP_DATA[collectionHandle];

  console.log(collectionHandle, collectionData);

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <section className="collection">
          <h1 className="collection-title">{collectionHandle}</h1>
          <CollectionComp data = {collectionData} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;