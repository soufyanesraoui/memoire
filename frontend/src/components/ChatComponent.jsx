import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import './Chat.css';

const projectID = '4d0e3cd4-fbbc-4972-a3c3-6fcbfa8ebc3e';

const ChatComponent = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return ( 
    <ChatEngine
      height="74vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
  );
};

export default ChatComponent;