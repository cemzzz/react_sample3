import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Login from './pages/Login.js';
import SingUp from './pages/SignUp.js';
import EditProfile from './pages/EditProfile.js';
import Direct from './pages/Direct.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/Login" element={<Login></Login>} /> 
            <Route path="/SignUp" element={<SingUp></SingUp>} />
            <Route path="/" element={<Home></Home>} />
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="/EditProfile" element={<EditProfile></EditProfile>} />
            <Route path="/Direct" element={<Direct></Direct>} />     
          </Routes>  
      </Router>
    </div>
  );
}
export default App;