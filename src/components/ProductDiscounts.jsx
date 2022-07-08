import { useRef } from 'react';
import DiscountInput from './UI/input/DiscountInput/DiscountInput';
import DiscountButton from './UI/button/DiscountButton/DiscountButton';

const ProductDiscounts = ({ createDiscount, removeDiscount }) => {
  const inputValue = useRef('');
  const activateDiscount = () => {
    if (
      +inputValue.current.value >= 0 &&
      +inputValue.current.value <= 100 &&
      inputValue.current.value !== ''
    ) {
      createDiscount(+inputValue.current.value);
    } else {
      alert('Введите цифру от 0 до 100!');
    }
  };
  return (
    <>
      <h2 className='leftLabel'>Настроить скидку</h2>
      <DiscountInput
        placeholder='Скидка (в процентах)'
        type='text'
        ref={inputValue}
      />
      <DiscountButton onClick={activateDiscount}>
        Установить скидку
      </DiscountButton>
      <DiscountButton onClick={removeDiscount}>Убрать скидку</DiscountButton>
    </>
  );
};

export default ProductDiscounts;
