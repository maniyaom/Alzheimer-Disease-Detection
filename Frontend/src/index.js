import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Home from './pages/Home'; // Import the Home component
import Model1 from './pages/Model1'; // Example pages
import Blogs from './pages/Blogs';
import Exercise from './pages/Exercise';
import Profile from './pages/Profile';
import Navbar from './components/Navbar'; // Import the Navbar component
import Suggestions1 from './pages/Suggestions1';
import Calculator from './pages/Calculator';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/*" element={<Navigate to="/Login" />} />
        </Routes> */}


        <Navbar />  {/* Navbar will stay on top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/model1" element={<Model1 />} />
          <Route path="/suggestions1" element={<Suggestions1 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
