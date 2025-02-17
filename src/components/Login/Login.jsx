import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import OR from './img/OR.png';
import { ToastContainer, toast } from "react-toastify";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

=======
import "react-toastify/dist/ReactToastify.css"; 

const Login = () => {
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
<<<<<<< HEAD
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const vehicleId = localStorage.getItem('vehicleId');

=======
  }); 
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
<<<<<<< HEAD
      [name]: type === 'checkbox' ? checked : value
=======
      [name]: type === 'checkbox' ? checked : value 
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
<<<<<<< HEAD
  
      const response = await axios.post('http://44.196.64.110:5001/api/auth/login', formData);
  
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.data._id);
      localStorage.setItem('vehicleId', vehicleId);
      toast.success('Login successful!');
  
      setTimeout(() => {
        const reservationId = localStorage.getItem('reservationId');
        const storedVehicleId = localStorage.getItem('vehicleId');
        const token = localStorage.getItem('token');
  
        if (reservationId && storedVehicleId && token) {
          navigate(`/checkout?vehicleId=${storedVehicleId}`);
        } else {
          navigate('/');
        }
  
        localStorage.removeItem('vehicleId');
      }, 1000);
    } catch (error) {
      console.error('There was an error logging in!', error);
  
=======
      
      const response = await axios.post('http://44.196.64.110:5001/api/auth/login', formData);
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.data._id);
      
      toast.success('Login successful!');

      setTimeout(() => {
        navigate('/home');
      }, 1000); 
    } catch (error) {
      console.error('There was an error logging in!', error);
      
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Login failed. Please try again.');
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
<<<<<<< HEAD
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };
  
=======
      
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8

  return (
    <div className='Payment'>
      <div className="login-container">
<<<<<<< HEAD
        <h3 className='login'>Log In</h3>
=======
        <h2>Log In</h2>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"><i className="fa-solid fa-envelope" /> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><i className="fa-solid fa-lock" /> Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group remember-me">
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div> */}
          {error && <p className="error">{error}</p>}
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="additional-options">
          <p>Not have any account? <Link to="/sign-up">Sign Up</Link></p>
          <img src={OR} alt="Or separator" />
          <p><Link to="/forgot-password">Forgot Password?</Link></p>
        </div>
      </div>
      <ToastContainer /> {/* Ensure this is present */}
    </div>
  );
};

export default Login;
