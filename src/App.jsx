import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Foot from './components/footer/Foot';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Home from './pages/home/Home'
import Tasks from './pages/tasks/Tasks';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" Component={Landing} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/tasks" Component={Tasks} />
        </Routes>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
