import React from 'react'
import { Link } from 'react-router-dom'

const RowPlaylist = ({playlist}) => {
  return (
    <Link to={"/playlist"} state={{ id: playlist.id }}>
       <li class="list-group-item bg-black text-light text-decoration-none">{playlist.name}</li>
    </Link>
  )
}

export default RowPlaylist
