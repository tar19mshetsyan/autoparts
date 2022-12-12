import React from 'react';

export const SignUp = () => {
  return(
    <form>
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
      <input type='email' placeholder='Email'/>
      <input type="password" placeholder='Password'/>
      <input type="password" placeholder='Confirm Password'/>
      <button type='submit'>Sign Up</button>
    </form>
  )
}