import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../requestToken';

const SearchPlaylist = ({ setData }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const token = await getToken();
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=playlist&market=FR`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setData(res.data.playlists.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher une playlist"
        aria-label=""
        onKeyPress={handleKeyPress}
        aria-describedby="basic-addon1"
      />
       <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
        <i class="fa-solid fa-magnifying-glass fa-flip-horizontal" style={{color: "#ffffff"}} />
        </button>
      </div>
    </div>
  );
}

export default SearchPlaylist;
