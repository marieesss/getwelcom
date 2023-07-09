import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../requestToken';

// Composant pour rechercher les playlists
const SearchPlaylist = ({ setData }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    // appelle la fonction pour récupérer le token
    const token = await getToken();
    try {
      // appel à l'API récupérer les playlists
      const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=playlist&market=FR`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // met à jour du state du Home composant
      setData(res.data.playlists.items);
    } catch (error) {
      console.log(error);
    }
  };

  // déclenche la recherche sur l'utilisateur tape entrée
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        onChange={e => setSearch(e.target.value)}
        placeholder="Rechercher une playlist"
        aria-label=""
        onKeyPress={handleKeyPress}
        aria-describedby="basic-addon1"
      />
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-secondary"
          type="button"
          onClick={handleSearch}
        >
          <i
            class="fa-solid fa-magnifying-glass fa-flip-horizontal"
            style={{ color: '#ffffff' }}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchPlaylist;
