  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import '../Signup/Signup.css';
  import backvideo from '../Assets/login.mp4';
  import axios from 'axios';



  function Login() {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [passerror, setpasserror] = useState('');
    const [submitted, setsubmitted] = useState(true);
    const navigate = useNavigate();
    

    function emailValid(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    }

    function passValid(pass) {
      return pass.length > 7;
    }

    const validateFields = () => {
      let valid = true;
      if (!emailValid(email)) {
        setemailerror('Enter a valid email');
        valid = false;
      } else {
        setemailerror('');
      }

      if (!passValid(pass)) {
        setpasserror('Password must be at least 8 characters');
        valid = false;
      } else {
        setpasserror('');
      }

      return valid;
    };

    const handleClick = async () => {
      setsubmitted(true);
      if (validateFields()) {
        try {
          const response = await axios.post('http://localhost:8000/loginpage', { email, pass });
          if (response.status === 200 && response.data.status === 'Success') {
            const token = response.data.token;
            const userName = response.data.name;
    
            
            localStorage.setItem('authorizeToken', token);
            localStorage.setItem('userName', userName);
    
            alert('Login Successful');
            
            navigate('/');
          } else {
            setemailerror('Invalid username or password');
          }
        } catch (error) {
          console.error('Error logging in', error);
          setemailerror('Error logging in. Please try again.');
        }
      }
    };
    


    return (
      <div>
        <div className='top'>
          <video className='background-video' autoPlay loop muted>
            <source src={backvideo} type="video/mp4" />
          </video>
          <div className='container'>
          <Link to='/'>
    <button className='btn1'><i className='bx bx-x'></i></button>
  </Link>
            <div className='header'>
              <div className='login-video1'>
                
              </div>
              <h1 className='video-h1'>MediTalk</h1>
            </div>
          

            <div className='inputs'>
              <div className='input'>
                <i class="fas fa-envelope"></i>
                <input type='email' placeholder='Email id' onChange={(t) => setemail(t.target.value)} value={email} required />
              </div>
              {submitted && <div className='login-error1'>{emailerror}</div>}
              <div className='input'>
                <i class='bx bxs-key'></i>
                <input type='password' placeholder='Password' onChange={(t) => setpass(t.target.value)} value={pass} required />
              </div>
              {submitted && <div className='login-error1'>{passerror}</div>}
            </div>
            {submitted ? <div></div> : <div className='login-error3'><p>OOPss..Invalid Username or Password.</p></div>}
            <div className='forget-pass'>
              <Link to='/forget'>
                <span>Forget password?</span>
              </Link>
            </div>

            <div className='submit-container'>
              <Link to='/signup'>
                <button className='submit1 grey'>Sign Up</button>
              </Link>
              <button className='submit' onClick={handleClick}>Login</button>
              <div className='back-home-btn'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Login;
