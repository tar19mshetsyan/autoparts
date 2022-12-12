import React from 'react';

export const SignIn = () => {
  return(
    <form>
      <input type="text" placeholder='Login'/>
      <input type="password" placeholder='Password'/>
      <button type='submit'>Sign In</button>
    </form>
  )
}