import React, { useState } from "react";
import axios from "axios";

const projectID = '41911dc4-324d-4110-88a2-3c6b9453ccf0';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': projectID,
            // 'Project-ID': 'e5b5e9a4-d9d3-4b4d-8b5f-e9f9c9b9e7d8',
            'User-Name': username,
            'User-Secret': password
        }
        
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError('OOPS, Incorrect Credentials');      
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username" required
                    />
                    <input
                        type="password"
                        value={password}
                        className="input"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;