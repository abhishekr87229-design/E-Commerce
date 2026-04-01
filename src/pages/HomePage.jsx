import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const HomePage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="home-page">
      <div className="home-banner">
        <img 
          className="home-image" 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          alt="Banner" 
        />
      </div>

      <div className="home-row">
        {products.length === 0 ? (
          <div className="no-products">
            <h2>No products found matching your criteria.</h2>
          </div>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
