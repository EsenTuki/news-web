import './App.css';
import News from './components/news/News';
import Publication from './components/publication/Publication'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';
import { ContextApp, initialState, newsReducer } from './reducers/newsReducer';
import Header from './components/header/Header';
import Login from './components/header/login/Login';

function App() {
  const [state, dispatch] = useReducer(newsReducer, initialState)
  return (
    <BrowserRouter>
      <div>
        <Header authorizedUserId={state.authorizedUserId} dispatch={dispatch} />
        <ContextApp.Provider value={{ state, dispatch }}>
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/publication/:id' element={<Publication />} />
            <Route path='/login' element={state.authorizedUserId.id == null ? <Login /> : <News />} />
          </Routes>
        </ContextApp.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
