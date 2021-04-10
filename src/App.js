import Title from './Title';
import Body from './Body';
import './App.css';
import './Icons.css';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';


function App() {
  return (
    <div className="App">
      <Title />
      <Body />
      <div className="Icons">
        <Facebook  size={40} width={70}/>
        <Instagram size={40} width={70}/>
        <Mail size={40} width={70}/>
      </div>
    </div>
  );
}

export default App;