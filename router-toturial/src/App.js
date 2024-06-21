import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';
import Mypage from './components/MypageComponent';

function App() {

  const {pathname} = useLocation();
  return (
    <Routes>
      <Route path='/*' element={ // switch(version 5)를 사용했을 때 이 경로는 마지막에 작성
        <div>
          <p>{pathname} 이 페이지는 존재하지 않습니다</p>
        </div>
      } /> 
      <Route path='/' Component={Home} /> 
      <Route path='/' element={<Home />} /> 
      <Route path='/mypage' element={<Mypage />} /> 
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
