import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate(); // Hook to navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate authentication process
        if (isLogin) {
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } else {
            // Handle signup logic (optional)
            navigate('/dashboard'); // Redirect to dashboard after signup
        }
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button 
                        className={isLogin ? 'active' : ''} 
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button 
                        className={!isLogin ? 'active' : ''} 
                        onClick={() => setIsLogin(false)}
                    >
                        SignUp
                    </button>
                </div>

                <form className='form' onSubmit={handleSubmit}>
                    {isLogin ? (
                        <>
                            <h2>Login Form</h2>
                            <input type='email' placeholder='Email' required />
                            <input type='password' placeholder='Password' required />
                            <a href='#'>Forgot Password</a>
                            <button type='submit'>Login</button>
                            <p>
                                Not a Member? <a href='#' onClick={() => setIsLogin(false)}>SignUp Now</a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>SignUp Form</h2>
                            <input type='email' placeholder='Email' required />
                            <input type='password' placeholder='Password' required />
                            <input type='password' placeholder='Confirm Password' required />
                            <button type='submit'>SignUp</button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
