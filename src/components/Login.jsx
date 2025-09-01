// src/components/Login.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import loginImg from '../assets/login/images/ven-login-img.png'

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Replace with real authentication
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google user:", decoded);
    // TODO: send to backend for verification
  };


  const handleGoogleFailure = () => {
    console.error('Google Login Failed');
  };

  return (
    <div className="fixed inset-0 bg-neutral-800/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 shadow-lg relative overflow-hidden grid grid-cols-1 md:grid-cols-12">

        {/* Left illustration */}
        <div className="hidden md:flex md:col-span-5 items-center justify-center bg-gray-50 p-6">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="max-w-xs"
          />
        </div>
        {/* Right form */}
        <div className="col-span-12 md:col-span-7 p-6 relative">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          >
            <X />
          </button>

          <h2 className="text-2xl font-semibold mb-4">Sign In to Your Account</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password + Forgot link */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right mt-1">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
                  onClick={() => alert('Forgot password flow here')}
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#c3002a] py-2 rounded-md text-white font-semibold hover:bg-[#e71945] transition"
            >
              Sign In
            </button>
          </form>

          {/* OR separator */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
