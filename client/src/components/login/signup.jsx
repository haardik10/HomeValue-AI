import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:9000/auth/signup', formData);
      console.log('User created successfully:', response.data);
      
      // Show success toast notification
        toast.success('User created successfully! Go to Login now.', {
        onClose: () => {
            // Optionally redirect or perform an action here
            window.location.href = '/login'; // Redirect to login page when toast is closed
        },
    });

  

    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Error creating user. Please try again.');
    }
  };

  const globalStyle = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
  };

  const containerStyle = {
    background: 'linear-gradient(to right, #4a5568, #1a202c)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    padding: '32px',
    width: '400px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#ffff00',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '90%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  };

  const buttonStyle = {
    backgroundColor: '#4a5568',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    width: '90%',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <>
      <style>
        {`
          body, html {
            ${Object.entries(globalStyle)
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          input:focus {
            border-color: #ffff00;
            outline: none;
          }

          button:hover {
            background-color: #3f4c55;
            transform: scale(1.05);
          }
        `}
      </style>
      <ToastContainer />
      <div style={containerStyle}>
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={titleStyle}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <FaUser size={20} color="#ffff00" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <FaEnvelope size={20} color="#ffff00" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <FaLock size={20} color="#ffff00" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <motion.button
              type="submit"
              style={buttonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </form>
          <p style={{ textAlign: 'center', color: 'white' }}>
            Already have an account? <a href="/login" style={{ color: '#ffff00' }}>Login</a>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SignupPage;
