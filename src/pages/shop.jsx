/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import Shopitems from '../components/shopitems';
import Newsletter from '../components/newsletter';
import Hero from '../components/hero'
import { PRODUCTS } from '../components/products';
import { PRODUCTS1 } from '../components/products';
import Sidebar from '../components/SideBar/Sidebar';
import Navigation from '../components/navigation/navigaton';
import Recommended from '../components/recommend/recommended';
import Card from '../components/Card'; 
import SidebarModal from '../components/SideBar/SidebarModal';

const shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = [...PRODUCTS, ...PRODUCTS1].filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const products = [...PRODUCTS, ...PRODUCTS1];

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ brand, price, name }) =>
          brand === selected ||
          price === selected ||
          name === selected
      );
    }
    return filteredProducts.map(
      ({ image, name, price, brand }) => (
        <Card
          key={Math.random()}
          img={image}
          title={name}
          price={price}
          brand={brand}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return <>
  <div className='row'>
    <div className='col-2 sidebar-menu'>
  <Sidebar handleChange={handleChange} />
  </div>
  <div className='col-10 bannershop'>
   <section className="shop-banner p-5">
  <div className="container-xxl">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 col-lg-6 text-center">
        <div className="shop-details">
          <h1 className="text-white"><b className="title-green">#100%</b> Off On All Products</h1>
          <p className="text-white fs-5">Make your orders we will deliver..</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>

<Navigation query={query} handleInputChange={handleInputChange} />

<div className='sidebar-menu-2pnR'>
<Recommended handleClick={handleClick} />
</div>
<div className='sidebar-menu-1nR'>
<SidebarModal />
</div>
  <section className="featured-products p-5">
    <div className="container-xxl">
      <div className="row">
        <div className='col-10 justify-content-center offset-2'>
        <Shopitems />
        </div>
      </div>
    </div>
  </section>
  <section className="pagination p-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 align-items-center justify-content-center">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <Hero />

  <Newsletter />
  </>;
}

// 2

export default shop