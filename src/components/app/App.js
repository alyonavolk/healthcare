import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from '../UI/card/card';
import Search from '../search/search';
import client from '../../resources/img/client.svg';
import bag from '../../resources/img/bag.svg';
import AsideItem from '../UI/asideItem/asideItem';
import Table from '../table/table';

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
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
