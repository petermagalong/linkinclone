import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      {/*  Header  */}
      <Header />
      <div className="app__body">
      {/*  App Body */}
      <Sidebar />
      {/* SideBar */}
      <Feed />
      {/* Feed */}
      {/* Widget */}
      </div>
    </div>
  );
}

export default App;
