import React from 'react'
import { useLocation } from 'react-router-dom';
import { getToken } from '../../requestToken';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Playlist = () => {
  let location = useLocation();
  console.log(location.state)

  useEffect(() => {
    const getPlaylist = async () => {
    const token = await getToken();
    try {
      const res= await axios.get(`https://api.spotify.com/v1/playlists/${location.state.id}`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }}

    getPlaylist()
  }, [location.state]);

  return (
    <div>
      
    </div>
  )
}

export default Playlist
