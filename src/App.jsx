import { useState } from 'react'
import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import './components/Home.module.css'
import About from './components/About.jsx'
function App() {

  return (
    <BrowserRouter>
      <nav className="navBar">
        <Link to="/" className="navItem">Home</Link>
        <Link to="/about" className="navItem">About</Link>
      </nav>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/about" Component={About}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
