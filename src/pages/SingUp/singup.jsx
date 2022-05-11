const handleSubmit = e => {
  e.preventDefault()
  window.alert('Quieres hacer registro')
}

export default function Login () {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='img-profile' />
          <input id='img-profile' type='file' />
        </div>
        <div>
          <label htmlFor='user'>Nick</label>
          <input id='nick' type='text' />
        </div>
        <div>
          <label htmlFor='passw'>Password</label>
          <input id='passw' type='password' />
        </div>
        <div>
          <input type='submit' value='Registrarse' />
        </div>
      </form>
    </div>
  )
}
