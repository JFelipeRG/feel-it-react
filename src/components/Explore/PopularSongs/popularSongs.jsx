import '../index.css'

import useSongs from '@hooks/useSongs'
import { useMemo } from 'react'
import SongMinimal from '../SongMinimal/songMinimal'

export default function HotestSongs () {
  const { songs, hotSongs } = useSongs()

  useMemo(() => hotSongs(), [])

  if (songs) {
    return (
      <div className='explore-menu'>
        <h2>Popular</h2>
        <span>(6 canciones más compartidas)</span>
        <div>
          {songs.map(song => {
            return <SongMinimal key={song.id} {...song} />
          })}
        </div>
      </div>
    )
  }
}
