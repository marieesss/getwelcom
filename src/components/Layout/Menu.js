import React from 'react';
import logo from '../../img/Spotify_Logo_RGB_Green.png';

const Menu = () => {
  return (
    <div>
      <nav class="navbar navbar-dark background mb-5 px-2">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            width="200"
            class="d-inline-block align-top"
            alt="logo"
          />
        </a>
      </nav>
    </div>
  );
};

export default Menu;
