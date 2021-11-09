import React from "react";
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Index /> } />
        </Routes>
      </Router>        
    </div>
  );
}

export default App;

