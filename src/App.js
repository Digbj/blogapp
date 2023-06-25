import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './Components/contact';
import Footer from './Components/footer';
import Main from './Components/main';
import MorePost from './Components/morepost';
import Navigation from './Components/nav';
import Post from './Components/post';
import FullPost from './Components/fullpost';
import Favourite from './Components/fav';
import Fav from './Components/fav';
import { FavouritesProvider } from './Components/fabcontext';
function App() {
  return (
    <div className="App">
      <FavouritesProvider>
      <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Post' element={<Post/>}/>
          <Route path='/MorePost' element={<MorePost/>}/>
          <Route path='/post/:id' element={<FullPost/>}/>
          <Route path='/fav/:id' element={<Favourite/>}/>
          <Route path='/favu' element={<Fav/>}/>
        </Routes>
        <Contact/>
      <Footer/>
      </Router>
      </FavouritesProvider>
      
    </div>
  );
}

export default App;
