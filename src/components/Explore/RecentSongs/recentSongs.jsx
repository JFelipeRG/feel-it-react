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
        <h1>Recent</h1>
        <p>(6 recently uploaded songs)</p>
        <div>
          {songs.map(song => {
            return <SongMinimal key={song.id} {...song} />
          })}
        </div>
      </div>
    )
  }
}
