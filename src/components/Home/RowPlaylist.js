import React from 'react'

const RowPlaylist = ({playlist}) => {
  return (
    <div>
       <li class="list-group-item">{playlist.name}</li>
    </div>
  )
}

export default RowPlaylist
