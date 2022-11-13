import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from '../UI/card/card';
import Search from '../search/search';
import client from '../../resources/img/client.svg';
import bag from '../../resources/img/bag.svg';
import AsideItem from '../UI/asideItem/asideItem';

function App() {
  return (
    <div className="App">
      <Card icon={bag} title='dfdsf' volum='dsdad'/>
      <Search />
      <AsideItem>jkfsjf</AsideItem>
    </div>
  );
}

export default App;
