import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent';


function App() {

  const [activeDark, setActiveDark] = useState(true);

  return (
    <div className={activeDark ? 'dark' : ''}>
      <div className='dark:bg-mainBlue bg-white'>

      <NavbarComponent activeDark={activeDark} setActiveDark={setActiveDark}/>
      <Outlet />
      </div>
    </div>
  );
}

export default App;
