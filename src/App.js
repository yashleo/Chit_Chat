import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    const [showSignup, setShowSignup] = useState(false);

    if (!localStorage.getItem('username')) {
        return showSignup ? <SignupForm setShowSignup={setShowSignup} /> : <LoginForm setShowSignup={setShowSignup} />;
    }

    return (
        <ChatEngine
            height="100vh"
            projectID="6546b488-09a3-4f58-baef-09131ac803a4"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
