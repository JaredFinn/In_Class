

import './App.css';
import Nav from './components/Nav';
import { Router } from 'express';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <div className="container">

          </div>
      </div>
    </Router>
  );
}

export default App;
