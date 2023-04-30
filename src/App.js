import Navbar from './navbar';
import Loginform from './loginform';
import './App.css';


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
