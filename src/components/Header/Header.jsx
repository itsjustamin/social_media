import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        width={"100px"}
        height={"100px"}
        src="https://png.pngtree.com/png-clipart/20241106/original/pngtree-sunset-logo-beach-palm-trees-coconut-vector-png-image_16691122.png"
        alt="logo"
      />
    </header>
  );
};
export default Header;
