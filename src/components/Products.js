import React from 'react';
import { connect } from 'react-redux';
import { loadComponent } from '../actions';

const Products = ({ loadComponent }) => {
  const handleClick = () => {
    loadComponent('PRODUCTS_COMPONENT');
  };

  return (
    <div className="product">
      Lorem ipsum...
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

const mapDispatchToProps = {
  loadComponent,
};

export default connect(null, mapDispatchToProps)(Products);
