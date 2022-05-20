import { useEffect, useState } from 'react'
import { obtainAll } from '@services/song.services'

export default function useSongs () {
  const [songs, setSongs] = useState()

  useEffect(() => {
    obtainAll()
      .then(songs => {
        setSongs(songs)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return { songs }
}
