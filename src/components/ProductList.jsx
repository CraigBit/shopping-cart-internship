import ProductItem from './ProductItem';

const ProductList = ({
  deleteProduct,
  products,
  discountActivated,
  discountPercent,
}) => {
  return (
    <>
      {products.length ? (
        <div className='cart'>
          {products.map((item) => (
            <div key={item.id} className='product'>
              <ProductItem
                item={item}
                deleteProduct={deleteProduct}
                discountActivated={discountActivated}
                discountPercent={discountPercent}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className='emptyList'>Список пуст</h2>
        </div>
      )}
    </>
  );
};

export default ProductList;
