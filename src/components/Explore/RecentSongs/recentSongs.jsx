import '../index.css'

import useSongs from '@hooks/useSongs'
import { useMemo } from 'react'
import SongMinimal from '../SongMinimal/songMinimal'

export default function RecentSongs () {
  const { songs, recentSongs } = useSongs()

  useMemo(() => recentSongs(), [])

  if (songs) {
    return (
      <div className='explore-menu'>
        <h2>Nuevo</h2>
        <p>(6 canciones añadidas recientemente)</p>
        <div>
          {songs.map(song => {
            return <SongMinimal key={song.id} {...song} />
          })}
        </div>
      </div>
    )
  }
}
