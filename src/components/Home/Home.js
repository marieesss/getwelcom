import React from 'react'
import { getToken } from '../../requestToken'
import axios from 'axios';
import { useState } from 'react';
import RowPlaylist from './RowPlaylist';

const Home = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState();


  const handleSearch = async () => {
    const token = await getToken();
    try {
      const res= await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=playlist&market=FR`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data.playlists.items)
      setData(res.data.playlists.items)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div class="overflow-hidden">
      <div class="row justify-content-center">
        <div class="col-10">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" type="button" onClick={handleSearch}>Button</button>
          </div>
          <input type="text" class="form-control" onChange={(e)=>setSearch(e.target.value)} placeholder="" aria-label="" aria-describedby="basic-addon1"/>
        </div>
        <div>
        <ul class="list-group list-group-flush">
          {data ? 
          data.map((playlist)=>(
            <RowPlaylist key={playlist.id} playlist={playlist} />
          )) : null}
          </ul>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
