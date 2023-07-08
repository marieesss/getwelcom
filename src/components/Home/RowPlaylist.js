import React from 'react'
import { Link } from 'react-router-dom'

const RowPlaylist = ({playlist}) => {
  return (
   
       <li class="list-group-item background text-light li-playlist">
        <div class="row justify-content-between">
          <div class="col-10">
          {playlist.name}
          </div>
          <Link to={"/playlist"} state={{ id: playlist.id }} class="col-1">
            Voir
          </Link>
          </div>
        </li>
   
  )
}

export default RowPlaylist
