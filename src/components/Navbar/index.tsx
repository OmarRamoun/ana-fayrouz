import React from 'react';

import { Header } from '../Header';

import styles from './styles.module.css';

const Navbar: React.FC = () => (
  <div className={styles.nav}>
    <Header />
  </div>
);

export { Navbar };
