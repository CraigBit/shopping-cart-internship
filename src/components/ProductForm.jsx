import ProductInput from './UI/input/ProductInput/ProductInput';
import MenuButton from './UI/button/MenuButton/MenuButton';
import { useState } from 'react';

const ProductForm = ({ createProduct }) => {
  const [product, setProduct] = useState({
    id: '',
    number: '',
    name: '',
    price: '',
  });

  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...product,
      price: +product.price,
    };

    if (product.number === '' || product.name === '' || product.price === '') {
      alert('Заполните все поля!');
      return;
    }

    if (isNaN(product.number) && isNaN(product.price)) {
      alert('Идентификатор и цена указаны неверно!');
      return;
    } else if (isNaN(product.number)) {
      alert('Числовой идентификатор неверный!');
      return;
    } else if (isNaN(product.price)) {
      alert('Цена указана неправильно!');
      return;
    }

    createProduct(newProduct);
    setProduct({ number: '', name: '', price: '' });
  };
  return (
    <form>
      <h2 className='leftLabel'>Добавить товар</h2>
      <ProductInput
        placeholder='Числовой идентификатор товара'
        value={product.number}
        onChange={(e) => setProduct({ ...product, number: e.target.value })}
      />
      <ProductInput
        placeholder='Название товара'
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <ProductInput
        placeholder='Цена товара (в рублях)'
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <div>
        <MenuButton onClick={addNewProduct}>Добавить товар</MenuButton>
      </div>
    </form>
  );
};

export default ProductForm;
