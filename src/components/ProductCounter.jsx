import { calcTotalDiscount } from '../helpers/calcDiscount';
import { calcTotalPrice } from '../helpers/calcTotalPrice';
import { useEffect, useState } from 'react';

const ProductCounter = ({ discountPercent, discountActivated, products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState('');

  useEffect(() => {
    calcTotalPrice(products, setTotalPrice);
  }, [products.length]);

  useEffect(() => {
    calcTotalDiscount(setTotalDiscount, totalPrice, discountPercent);
  }, [totalPrice, discountPercent]);

  return (
    <div className={discountActivated ? 'counterActive' : 'counter'}>
      <h2>Всего добавлено товаров: {products.length}</h2>
      <h2 className={discountActivated ? 'crossed' : ''}>
        Общая цена: {totalPrice}₽
      </h2>
      {discountActivated ? (
        <div>
          <h3>Со скидкой: {totalDiscount}₽</h3>
          <p>Размер скидки: {discountPercent}%</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCounter;
