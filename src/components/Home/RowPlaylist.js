import React from 'react';
import { Link } from 'react-router-dom';

const RowPlaylist = ({ playlist }) => {
  return (
    <li class="list-group-item background text-light li-playlist">
      <div class="row justify-content-between">
        <div class="col-10  d-flex align-items-center">{playlist.name}</div>
        <Link to={'/playlist'} state={{ id: playlist.id }} class="col-auto">
          <i
            class="fa-solid fa-angle-right fa-lg"
            style={{ color: '#1DB954' }}
          />
        </Link>
      </div>
    </li>
  );
};

export default RowPlaylist;
