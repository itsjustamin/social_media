import React from "react";
import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a>Profile</a>
      </div>
      <div className={styles.item}>
        <a>Messages</a>
      </div>
      <div className={styles.item}>
        <a>News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <div className={styles.item}>
        <a> Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
