import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Orders } from '../../pages/Orders/Orders';
import { Products } from '../../pages/Products/Products';
import { Profile } from '../../pages/Profile/Profile';
import { SignIn } from '../../pages/SignIn/SignIn';
import { SignUp } from '../../pages/SignUp/SignUp';
import { Navbar } from '../Navbar/Navbar';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}