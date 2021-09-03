import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        App
      </div>
    </Router>
  );
}

export default App;
