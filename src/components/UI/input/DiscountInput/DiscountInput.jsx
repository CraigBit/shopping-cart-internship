import React from 'react';
import styles from '../DiscountInput/DiscountInput.module.css';

const DiscountInput = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} className={styles.inputStyle} />;
});

export default DiscountInput;
