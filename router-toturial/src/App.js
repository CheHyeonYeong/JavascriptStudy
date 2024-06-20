import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} /> 
      <Route path='/' element={<Home />} /> 
      <Route path='/user' element={<User />} />
      <Route path='/user/:id' element={<User />} />
      {/* <Route path='/profile' element={<Profiles />}>
        <Route path=':id' element={<User />} />
      </Route> */}

      <Route path='/profile/*' element={<Profiles />} />

      <Route path='/info' element={<Info />} />
      <Route path='/info/:num' element={<Info />} />
      <Route path='/board' element={<Board />}>
        <Route path=':num' element={<BoardContent />} />
      </Route>
    </Routes>
  );
}

export default App;
