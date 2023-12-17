import React from 'react';
import './App.css';
import { AppContext } from './context/contextApi';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Feed from './component/Storm';
import Header from './component/Header';
import SearchResult from './component/SearchResults';
import VideoDetails from './component/VideoDetail';


function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/searchResult/:searchQuery" exact element={<SearchResult/>}/>
            <Route path="/video/:id" exact element={<VideoDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
