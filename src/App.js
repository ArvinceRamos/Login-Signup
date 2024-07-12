import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <Router>
            <div className="text-center mt-5">
                <h1>Login & Signup</h1>
                <nav className="mt-3">
                    <Link to="/login" className="btn btn-secondary me-2">Login</Link>
                    <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
