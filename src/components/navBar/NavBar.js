import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './NavBar.module.css';
export default function NavBar() {
  return (
    <Router>
      <div className={styles.NavContainer}>
        <div className={styles.logo}>logo</div>
        <nav>
          <ul>
            <li>Sign up!</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
