import './search.css'

import { createAutocomplete } from '@algolia/autocomplete-core'
import { useMemo, useState, useRef } from 'react'
import { searchSong } from '@services/song.services'

const SongInfo = ({ caratula, nombre, artista }) => {
  const url = `https://peaceful-brook-00691.herokuapp.com/cancion/img/${caratula}`

  return (
    <>
      <img src={url} alt='caratula' width='100px' height='100px' />
      <div>
        <p>{nombre}</p>
        <p>{artista}</p>
      </div>
    </>
  )
}

export default function Search ({ songSelect }) {
  const [autoCompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(() =>
    createAutocomplete({
      placeholder: 'Buscar Canción',
      onStateChange: ({ state }) => setAutocompleteState(state),
      getSources: () => [{
        sourceId: 'songs-api',
        getItems: ({ query }) => {
          if (query) {
            return searchSong({ query })
              .then(res => { return res })
          }
        }
      }]
    }), [])

  const selectSong = (item) => {
    autocomplete.setQuery('')
    setAutocompleteState({
      isOpen: false
    })
    songSelect({ ...item })
  }

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} {...formProps}>
      <div className='search-container'>
        <input className='search-song' type='text' {...inputProps} />
        {
          autoCompleteState.isOpen && (
            <div className='autocomplete' ref={panelRef} {...autocomplete.getPanelProps()}>
              {autoCompleteState.collections.map((collection, index) => {
                const { items } = collection

                return (
                  <section key={`section-${index}`}>
                    {items.length > 0 && (
                      <ul {...autocomplete.getListProps()}>
                        {
                            items.map(item => (
                              <li key={item.id} className='song-info-search' onClick={() => selectSong({ ...item })}>
                                <SongInfo {...item} />
                              </li>
                            ))
                        }
                      </ul>
                    )}
                  </section>
                )
              })}
            </div>
          )
        }
      </div>
    </form>
  )
}
