import Container from './components/Container/Container.js';
import React from 'react';

import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import Page404 from './components/Page404/Page404.js';

import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;