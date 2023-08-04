import React from 'react'
import styled from 'styled-components';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Thoughts from './pages/Thoughts';
import Opportunities from './pages/Opportunities';
import Forum from './pages/Forum';
import About from './pages/About';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/thoughts' element={<Thoughts />} />
        <Route path='/opportunities' element={<Opportunities />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/about' element={<About />} />
        <Route path='/createpost' element={<CreatePost />} />



      </Routes>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`