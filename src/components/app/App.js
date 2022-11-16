import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from '../UI/card/card';
import Search from '../search/search';
import bag from '../../resources/img/bag.svg';
import AsideItem from '../UI/asideItem/asideItem';
import Table from '../table/table';
import Dashboard from '../Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Card icon={bag} title='dfdsf' volum='dsdad'/>
            <Search />
            <AsideItem font='appointments' link='/'>jkfsjf</AsideItem>
            <AsideItem font='appointments' link='/kdsd'>jkfsjf</AsideItem>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
