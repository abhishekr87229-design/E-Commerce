import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        const result = login(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="auth-container">
            <Link to="/" className="auth-logo-link">
                <h1 className="auth-logo">AMZClone</h1>
            </Link>
            
            <div className="auth-box">
                <h2>Sign in</h2>
                {error && <div className="auth-error">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit" className="auth-btn">Continue</button>
                    
                    <p className="auth-terms">
                        By continuing, you agree to AMZClone's Conditions of Use and Privacy Notice.
                    </p>
                </form>
            </div>
            
            <div className="auth-divider">
                <span>New to AMZClone?</span>
            </div>
            
            <Link to="/register" className="auth-register-btn">
                Create your AMZClone account
            </Link>
        </div>
    );
};

export default LoginPage;
