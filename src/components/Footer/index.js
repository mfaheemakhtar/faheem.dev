import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <span>
        Copyright &copy; {new Date().getFullYear()} Muhammad Faheem Akhtar. All
        rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
