import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      
        <div className="footer-bottom">
          <p>&copy; {currentYear} Harshitha. All rights reserved.</p>
        </div>
      
    </footer>
  );
}

export default Footer;