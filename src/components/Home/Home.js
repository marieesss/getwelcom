import React, { useState } from 'react';
import RowPlaylist from './RowPlaylist';
import SearchPlaylist from './SearchPlaylist';
import Menu from '../Layout/Menu';

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div class="overflow-hidden">
      <Menu />
      <div class="row justify-content-center">
        <div class="col-10">
          <SearchPlaylist setData={setData} />
          <div class="result">
            <div>
              {data.length === 0 ? (
                <p>Cherchez votre playlist préférée</p>
              ) : (
                <p>{data.length} résultats trouvés</p>
              )}
            </div>
            <ul class="list-group list-group-flush">
              {data
                ? data.map(playlist => (
                    <RowPlaylist key={playlist.id} playlist={playlist} />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
