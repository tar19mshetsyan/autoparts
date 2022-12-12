import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';

export const App = () => {
  return(
    <div>
      <Navbar/>
      <SignIn/>
      <SignUp/>
    </div>
  )
}