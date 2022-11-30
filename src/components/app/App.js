import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from '../search/search';
import Dashboard from '../Dashboard/Dashboard';
import AsideMenu from '../asideMenu/asideMenu';
import Appointments from '../Appointments/appointments';
import Authorization from '../Authorization/authorization';

function App() {

  return (
    <Router>
      <div className="app">
        <Authorization />
            <AsideMenu />
          <div className='app__content'>
            <Search />
            <Switch>
              <Route exact path='/'>
                <div className='app__dashboard'>
                  <Dashboard />
                </div>
              </Route>
              <Route exact path='/dashboard'>
                <div className='app__dashboard'>
                  <Dashboard />
                </div>
              </Route>
              <Route exact path='/appointments'>
                <div className='app__appointments'>
                  <Appointments />
                </div>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
