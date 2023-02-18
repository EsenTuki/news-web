import './App.css';
import News from './components/news/News';
import Publication from './components/publication/Publication'
import logo from './logo.svg';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import { useReducer } from 'react';
import { ContextApp, initialState, newsReducer } from './reducers/newsReducer';

function App() {
  const [state, dispatch] = useReducer(newsReducer, initialState)
  return (
    <BrowserRouter>

      <div>
        <div className='header'>
          <div className='header-item'>
            <NavLink to={'/'} style={{display:'block'}}>
              <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
          </div>
        </div>
        <ContextApp.Provider value={{state, dispatch}}>
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/publication/:id' element={<Publication />} />
          </Routes>
        </ContextApp.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
