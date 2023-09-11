
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Menu from'./pages/Menu'
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
   <Router> 
     <Navbar/>
   <Routes>
    <Route path="/" exact Component={Home}/>
    <Route path="/menu" exact Component={Menu}/>
    <Route path="/about" exact Component={About}/>
    <Route path="/contact" exact Component={Contact}/>

    </Routes> 
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
