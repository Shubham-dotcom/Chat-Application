import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'd157eca6-fc68-4151-8cde-742cf3211f0e';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			//projectID created once you create your Chat Application
			projectID={projectID}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
	);

};

// infinite scroll, logout, more customizations...

export default App;
