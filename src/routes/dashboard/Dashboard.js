import { React, useState } from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



export default Dashboard = ({
  userUsername,
  setIsLOggedIn,
}) => {
  <BrowserRouter>
    <div className='dashboard'>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLOggedIn}/>
      <div>
        <SideBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/favorites" element={<Favorites/>}/>
            <Route exact path="/watchlater" element={<WatchLater/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
          </Routes>
        </main>
      </div>
    </div>
  </BrowserRouter>
}