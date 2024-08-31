import React, { useState } from 'react';
import axios from 'axios';

const projectID = "6546b488-09a3-4f58-baef-09131ac803a4";
const privateKey = "be18526c-3003-4775-8781-4a2335cc3da2";

const SignupForm = ({ setShowSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
        try {
            // Create a new user in the ChatEngine
            await axios.post(
                'https://chatengine.io/projects/6546b488-09a3-4f58-baef-09131ac803a4#users/',
                { username, secret: password },
                { headers: { 'Private-Key': privateKey } }
            );

            // If successful, log the user in
            await axios.get('https://chatengine.io/projects/6546b488-09a3-4f58-baef-09131ac803a4#chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');
        } catch (err) {
            setError('Error creating account. Username may already exist.');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Create Account</span>
                        </button>
                    </div>
                </form>
                <div align="center" style={{ marginTop: '10px' }}>
                    <button onClick={() => setShowSignup(false)} className="button">
                        <span>Back to Login</span>
                    </button>
                </div>
                <h2>{error}</h2>
            </div>
        </div>
    );
};

export default SignupForm;
