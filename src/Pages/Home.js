import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import SHOP_DATA from '../data';
import Search from '../components/searchbar/search';
import { Link } from 'react-router-dom';

const Home = () => {

  const data = SHOP_DATA.homePage;

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <section className="search-section">
          <h1 className="search-section-titles">Search Your Products</h1>
          <Search />
        </section>
        <section className="all-collections">
          <h1 className="all-collections-title">All Collections</h1>
          <div className="all-collections-wrapper">
            {
              data.map((collectionObj) => {
                return (
                  <Link className="anchor collection" to={`/collection/${collectionObj.handle}`}>
                    <div key={collectionObj.id}>
                      <img src={collectionObj.imgUrl} alt={collectionObj.collection} />
                      <h2>{collectionObj.collection}</h2>
                    </div>
                  </Link>
                );
              })
            }
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;