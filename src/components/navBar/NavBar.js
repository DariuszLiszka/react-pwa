import React from 'react';
import styles from './NavBar.module.css';
export default function NavBar() {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.logo}>logo</div>
      <nav>
        <ul>
          <li>Services</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
