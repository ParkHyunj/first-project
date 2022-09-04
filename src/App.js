import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Category from './Pages/Category';
import Login from './Pages/Login';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/category" element={Category} />
                <Route path="/login" element={ Login } />           
            </Routes>   
            <Navbar/>      
        </BrowserRouter>
    )
}

export default App;