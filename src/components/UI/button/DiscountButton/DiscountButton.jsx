import styles from '../DiscountButton/DiscountButton.module.css';

const DiscountButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.discountBtn}>
      {children}
    </button>
  );
};

export default DiscountButton;
