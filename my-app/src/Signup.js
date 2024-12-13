import React, { useState } from 'react';
import './Signup.css';

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:555/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                alert('Sign up successful');
                window.location.href = '/login'; 
            } else {
                const message = await response.text();
                setError(message);
            }
        } catch (err) {
            setError('Error during signup');
            console.error(err);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
