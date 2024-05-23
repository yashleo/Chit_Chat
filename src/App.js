import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="41911dc4-324d-4110-88a2-3c6b9453ccf0"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;