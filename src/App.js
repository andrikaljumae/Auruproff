import './styles/App.css';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './pages/Index.js';
import Logo from './components/Logo.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Logo/>
        <Switch>
          <Route path="/" exact component={Pages.Homepage} />
          <Route path='/survepesu' exact component={Pages.Survepesu} />
          <Route path='/aurupesu' exact component={Pages.Aurupesu} />
          <Route path='/jaapuhastus' exact component={Pages.Jaapuhastus} />
          <Route path='/tehtud_tood' exact component={Pages.Tehtud_tood} />
          <Route path='/kontakt' exact component={Pages.Kontakt} />
        </Switch>
      </BrowserRouter>
      <Footer />
      </div>
  );
}

export default App;