import { calcItemDiscount } from '../helpers/calcDiscount';

const ProductItem = ({
  item,
  deleteProduct,
  discountActivated,
  discountPercent,
}) => {
  return (
    <>
      <div className='productContent'>
        <div>Номер: {item.number}</div>
        <div>Название: {item.name}</div>
        <div>
          <span className={discountActivated ? 'crossed' : ''}>
            Цена: {item.price}₽
          </span>
          {discountActivated ? (
            <span className='itemDiscount'>
              {`Со скидкой:
                  ${calcItemDiscount(item.price, discountPercent)}₽`}
            </span>
          ) : null}
        </div>
      </div>
      <div>
        <button onClick={() => deleteProduct(item)} className='deleteButton'>
          Удалить
        </button>
      </div>
    </>
  );
};

export default ProductItem;
