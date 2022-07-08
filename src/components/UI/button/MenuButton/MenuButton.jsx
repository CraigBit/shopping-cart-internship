import styles from './MenuButton.module.css';

const MenuButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.menuBtn}>
      {children}
    </button>
  );
};

export default MenuButton;
