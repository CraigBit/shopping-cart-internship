export const calcTotalPrice = (products, setTotalPrice) => {
  let result = products.reduce(
    (sum, current) => sum + Number(current.price),
    0
  );
  setTotalPrice(+result);
};
