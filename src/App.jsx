import './App.css';
import Home from './Home';
import Login from './Login/Login';
import NavBar from './Navbar/Navbar';
import Signup from './Signup/Signup';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
