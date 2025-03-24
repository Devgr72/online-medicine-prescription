
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
     <Routes>
      
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    
     </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
