import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRouter from './routers/UserRouter';

const App = () => {
  return (
         <Router>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
        </Routes>
      </Router>
  );
}

export default App;
