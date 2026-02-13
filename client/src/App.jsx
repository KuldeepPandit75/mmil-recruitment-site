import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/complete-profile" element={<Chatbot />} />
      </Routes>
      <ToastContainer position="top-center" />
      
    </div>
  )
}

export default App