import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='username'>username</input>
        <input type='password' placeholder='password'>password</input>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login