import React from 'react';

const RowSongs = ({ music }) => {
  return (
    <div>
      <li class="list-group-item liste-music mb-2">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto item-music">
            <h2>{music.name}</h2>
            <div class="row">
              {music.artists.map((artist) => (
                <p class="artist-name col-auto">{artist.name}</p>
              ))}
            </div>
          </div>
          <div class="col-auto d-flex align-items-center">
            <i
              class="fa-solid fa-lg fa-ellipsis-vertical"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      </li>
    </div>
  );
};

export default RowSongs;
