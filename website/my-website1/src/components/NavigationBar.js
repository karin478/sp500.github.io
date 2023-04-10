import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink exact to="/" activeClassName={styles.active} className={styles.a}>
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/description" activeClassName={styles.active} className={styles.a}>
            Description
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/price" activeClassName={styles.active} className={styles.a}>
            Price
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/login" activeClassName={styles.active} className={styles.a}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
