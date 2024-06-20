import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import MyPage from './components/MyPage';

function App() {
  return (
    <Routes>
    {/* 링크들 모음 */}
      <Route path='/' Component={Home} /> 

      <Route path='/board' element={<Board />}>
        <Route path=':num' element={<BoardContent />} />
      </Route>
      <Route path='/mypage' Component={MyPage} /> 

    </Routes>
  );
}

export default App;
