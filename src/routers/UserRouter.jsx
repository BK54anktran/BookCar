import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element = {<Index/>}/>
      <Route path='/index' element = {<Index/>}/>
    </Routes>
  );
}

export default Router;
