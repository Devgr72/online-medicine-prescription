
import Home from './components/Home';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Forget from './components/ForgetPass/Forgetpass'
import Privacy from './components/privacy/Privacy'
import Tos from './components/TermService/tos';
import Contact from './components/contact/ContactUs'
import Medicine from './components/Medicine/MedicinePage'
import Checkout from './components/CheckoutPage/CheckoutPage'
import Payment from './components/Payment/PaymentPage'
import Confirmation from './components/Confirmation/ConfirmationPage'
import Admin from './components/admin/Admin'
function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
     <Routes>
     <Route 
  path="/medicine" 
  element={
    <ProtectedRoute>
      <Medicine />
    </ProtectedRoute>
  } 
/>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    <Route path='/terms' element={<Tos/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path="/confirmation" element={<Confirmation/>}/>
    <Route path="/checkout" element={<Checkout />} />
    <Route path='/medicine' element={<Medicine/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/forget' element={<Forget/>}/>
     </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
