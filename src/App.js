import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/profile" element={<Profile></Profile>} />   
          </Routes>  
      </Router>
    </div>
  );
}
export default App;