import './App.scss';
import './null.scss';
import React from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {
	return (

		<BrowserRouter>
			<div className='app-grid'>
				<HeaderContainer />
				<SidePanel />
				<div className='content'>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/dialogs'
						render={() => <DialogsContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <div>Login page</div>} />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
