import styles from '../ProductInput/ProductInput.module.css';

const ProductInput = (props) => {
  return <input className={styles.inputStyle} {...props} />;
};

export default ProductInput;
