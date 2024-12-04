import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbars/Navbar';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

