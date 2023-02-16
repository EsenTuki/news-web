import './App.css';
import News from './components/news/News';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <div className='header'>
        <div className='header-item'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <News/>
      <div>
        pagination
      </div>
    </div>
  );
}

export default App;
