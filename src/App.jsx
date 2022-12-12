import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

export const App = () => {
  return(
    <div>
      <Navbar/>
      <SignIn/>
      <SignUp/>
    </div>
  )
}