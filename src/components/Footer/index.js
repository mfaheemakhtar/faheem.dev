import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer>
      <div className="trademark">
        <span>
          <em>
            * All company, product and service names used in this website are
            for identification purposes only. Use of these names, logos, and
            brands does not imply endorsement, affilation, and/or association.
          </em>
        </span>
      </div>

      <div className="copyright">
        <span>
          Copyright &copy; {new Date().getFullYear()} Muhammad Faheem Akhtar.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
