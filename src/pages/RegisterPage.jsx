import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './RegisterPage.css'; // We can actually just reuse LoginPage CSS but we will make a wrapper file

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        const result = register(name, email, password);
        if (result.success) {
            navigate('/login');
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
                <h2>Create account</h2>
                {error && <div className="auth-error">{error}</div>}
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label htmlFor="name">Your name</label>
                        <input 
                            type="text" 
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First and last name"
                        />
                    </div>

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
                            placeholder="At least 6 characters"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirmPassword">Re-enter password</label>
                        <input 
                            type="password" 
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit" className="auth-btn">Continue</button>
                    
                    <p className="auth-terms">
                        By creating an account, you agree to AMZClone's Conditions of Use and Privacy Notice.
                    </p>

                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
