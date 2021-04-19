import Title from './Title';
import Body from './Body';
import './App.css';
import Icons from './components/Icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <Body />
      <Icons />
      </div>
  );
}

export default App;