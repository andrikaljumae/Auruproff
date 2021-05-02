import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './pages/Index.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Pages.Homepage} />
          <Route path='/survepesu' exact component={Pages.Survepesu} />
          <Route path='/aurupesu' exact component={Pages.Aurupesu} />
          <Route path='/jaapuhastus' exact component={Pages.Jaapuhastus} />
          <Route path='/tehtud_tood' exact component={Pages.Tehtud_tood} />
          <Route path='/kontakt' exact component={Pages.Kontakt} />
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;