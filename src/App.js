import './App.css';
import { useState } from 'react';

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductCounter from './components/ProductCounter';
import ProductDiscounts from './components/ProductDiscounts';

function App() {
  const [discountActivated, setDiscountActivated] = useState(false);
  const [discountPercent, setDiscountPercent] = useState('');
  const [products, setProducts] = useState([]);

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (deletedProduct) => {
    setProducts(products.filter((item) => item.id !== deletedProduct.id));
  };

  const createDiscount = (value) => {
    setDiscountPercent(value);
    setDiscountActivated(true);
  };

  const removeDiscount = () => {
    setDiscountActivated(false);
  };

  return (
    <div className='App'>
      <div className='leftBlock'>
        <ProductForm createProduct={createProduct} />
        <ProductDiscounts
          createDiscount={createDiscount}
          removeDiscount={removeDiscount}
        />
      </div>
      <div className='rightBlock'>
        <ProductCounter
          discountActivated={discountActivated}
          discountPercent={discountPercent}
          products={products}
        />
        <ProductList
          discountPercent={discountPercent}
          discountActivated={discountActivated}
          products={products}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
