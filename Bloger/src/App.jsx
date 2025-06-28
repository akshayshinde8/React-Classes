import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
};

export default App;
