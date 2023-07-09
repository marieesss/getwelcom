import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center">
        <Link
          to="https://github.com/marieesss"
          className="col-1"
          target="_blank"
        >
          <i
            className="fa-brands fa-github fa-2xl"
            style={{ color: '#1DB954' }}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
