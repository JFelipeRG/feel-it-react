import { useState, useCallback } from 'react'
import { hotest, recent } from '@services/song.services'

export default function useSongs () {
  const [songs, setSongs] = useState()

  const hotSongs = useCallback(() => {
    hotest()
      .then(res => {
        setSongs(res)
      })
  }, [songs])

  const recentSongs = useCallback(() => {
    recent()
      .then(res => {
        setSongs(res)
      })
  }, [songs])

  return { songs, hotSongs, recentSongs }
}
