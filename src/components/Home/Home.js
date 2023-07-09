import React, { useState } from 'react';
import RowPlaylist from './RowPlaylist';
import SearchPlaylist from './SearchPlaylist';
import Menu from '../Layout/Menu';

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="overflow-hidden">
    <Menu/>
      <div className="row justify-content-center">
        <div className="col-10">
          <SearchPlaylist setData={setData} />
          <div class="result">
          <div>
            {data.length ===0 ?<p>Cherchez votre playlist préféré</p> :<p>{data.length} résultats trouvés</p>}
          </div>
            <ul className="list-group list-group-flush">
              {data ? 
                data.map((playlist) => (
                  <RowPlaylist key={playlist.id} playlist={playlist} />
                )) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
