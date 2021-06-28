import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'fea5626e-fe51-43bd-bd1c-5ae09aaa8ca9';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height='100vh'
			userName='Swati Chandra'
			userSecret='12345678'
			projectID={projectID}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
	);

};

// infinite scroll, logout, more customizations...

export default App;
