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
        <h1>Popular</h1>
        <span>(6 most shared songs)</span>
        <div>
          {songs.map(song => {
            return <SongMinimal key={song.id} {...song} />
          })}
        </div>
      </div>
    )
  }
}
