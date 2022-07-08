export const calcTotalDiscount = (calcResult, price, percent) => {
  let result = price - (price / 100) * +percent;
  calcResult(+result.toFixed(1));
};

export const calcItemDiscount = (price, percent) => {
  let result = price - (price / 100) * +percent;
  return +result.toFixed(1);
};
