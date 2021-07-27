import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Collection from './Pages/Collection';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/product/:id" render={props => <ProductPage {...props}/>} />
          <Route path="/collection/:handle" render={props => <Collection {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
