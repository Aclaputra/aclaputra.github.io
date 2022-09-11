import React from 'react'
import './styles/App.css';
import './styles/responsive.css'
import Navbar from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
