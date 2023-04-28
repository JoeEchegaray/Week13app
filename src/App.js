import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Loginform from './loginform';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Loginform />
      </header>
    </div>
  );
}

export default App;
