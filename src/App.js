import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App(){
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
            height="100vh"
            projectID="9babeaed-81aa-454b-9a4a-4c16b1898a8f"
            userName="Abhishek"
            userSecret="Abhishek@8861"
            renderChatFeed={(chatAppProps)=><ChatFeed{ ... chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            
            />
    )
}
export default App;