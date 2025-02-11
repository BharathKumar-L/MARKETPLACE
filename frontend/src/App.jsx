import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Otp from './components/otp/otp.jsx';
import Home from './components/home/home'; 

function App() {
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId="977383699132-0kqbejgb7o7hs6iuv5qbsqsqjsf9i3dd.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
