import React from 'react';
import { useLocation } from 'react-router-dom';
import { getToken } from '../../requestToken';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RowSongs from './RowSongs';
const Playlist = () => {
  const [playlist, setPlaylist] = useState();
  let location = useLocation();
  console.log(location.state);

  useEffect(() => {
    const getPlaylist = async () => {
      const token = await getToken();
      try {
        const res = await axios.get(
          `https://api.spotify.com/v1/playlists/${location.state.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPlaylist(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPlaylist();
  }, [location.state]);

  return (
    <section class="m-5">
      {playlist ? (
        <>
          <div class="container-flexbox">
            <div class="shadow-violet">
              <img
                src={playlist.images[0].url}
                class="img-playlist"
                alt={playlist.name}
              />
            </div>
            <h1 class="text-center playlist-title">{playlist.name}</h1>
            <button class="spotify-following-button">Following</button>
            <p class="m-1 playlist-artist-name">
              Artist Name - {playlist.followers.total} followers
            </p>
            <button class="m-2 spotify-shuffle">Shuffle Play</button>
          </div>
          <div class="row justify-content-center">
            <div class="col-10">
              <div class="row justify-content-between">
                <p class="col-1">Download</p>
                <div class="form-check form-switch col-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
              <ul class="list-group">
                {playlist.tracks.items.map(music => (
                  <RowSongs music={music.track} />
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Playlist;
