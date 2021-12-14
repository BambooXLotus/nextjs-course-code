import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllMeetupPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<AllMeetupPage></AllMeetupPage>
					</Route>
					<Route path='/new-meetup'>
						<NewMeetupPage></NewMeetupPage>
					</Route>
					<Route path='/favorites'>
						<FavoritesPage></FavoritesPage>
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
