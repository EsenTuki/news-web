import './App.css';
import News from './components/news/News';
import Publication from './components/publication/Publication'
import logo from './logo.svg';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='header'>
          <div className='header-item'>
            <NavLink to={'/'}>
              <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/publication/:id' element={<Publication />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
