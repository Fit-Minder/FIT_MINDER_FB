import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import './styles/calendar.css';
import Main from "./components/main";
import First from "./components/first";
import Calendar from "./components/calendar";
import MainScreen from './components/MainNeckStretchingScreen';
import NeckStretchingSecond from './components/Stretching/NeckStretching-second';
import ShoulderStretching from './components/Stretching/ShoulderStretching';
import ShoulderStretchingSecond from './components/Stretching/ShoulderStretching-second';
import ShoulderStretchingThird from './components/Stretching/ShoulderStretching-third';
import ShoulderStretchingFourth from './components/Stretching/ShoulderStretching-fourth';
import WristStretching from './components/Stretching/WristStretching';
import WristStretchingSecond from './components/Stretching/WristStretching-second';
import EyeStretching from './components/Stretching/EyeStretching';
import EyeStretchingSecond from './components/Stretching/EyeStretching-second';
import AlarmPageOne from './components/Alarm/AlarmPage-one';
import StretchingChoosePage from './components/Stretching-choose/Stretching-choose-page';
import NeckStretching from './components/Stretching/NeckStretching';
import TimerBarNeck from './components/Stretching/Timer-bar-neck';
import TimerBarShoulder from './components/Stretching/Timer-bar-shoulder'
import TimerBarWrist from './components/Stretching/Timer-bar-wrist';
import TimerBarEye from './components/Stretching/Timer-bar-eye';

function HeaderBar() {
  const location = useLocation();

  // First 페이지에서는 헤더바를 숨김
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className='webHeaderBar'>
      <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" className='webHeaderBarLogo' />
      <Link to='/main' className='webHeaderBarLink'>홈</Link>
      <Link to='/stretching-choose-page' className='webHeaderBarLink'>스트레칭</Link>
      <Link to='/calendar' className='webHeaderBarLink'>잔디 캘린더</Link>
    </div>
  );
}
//mainscreen 목 스트레칭으로 리다이렉트되는데 확인 필요
function App() {

  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/mainscreen" element={<MainScreen />} />  
          <Route path="/main" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/neckstretching" element={<NeckStretching />} />
          <Route path="/neckstretching-second" element={<NeckStretchingSecond />} />
          <Route path="/shoulderstretching" element={<ShoulderStretching />} />
          <Route path="/shoulderstretching-second" element={<ShoulderStretchingSecond />} />
          <Route path="/shoulderstretching-third" element={<ShoulderStretchingThird />} />
          <Route path="/shoulderstretching-fourth" element={<ShoulderStretchingFourth />} />
          <Route path="/wriststretching" element={<WristStretching />} />
          <Route path="/wriststretching-second" element={<WristStretchingSecond />} />
          <Route path="/eyestretching" element={<EyeStretching />} />
          <Route path="/eyestretching-second" element={<EyeStretchingSecond />} />
          <Route path="/alarmpage-one" element={<AlarmPageOne />} />
          <Route path="/stretching-choose-page" element={<StretchingChoosePage />} />
          <Route path="/timer-bar-neck" element={<TimerBarNeck />} />
          <Route path="/timer-bar-shoulder" element={<TimerBarShoulder />} />
          <Route path="/timer-bar-wrist" element={<TimerBarWrist />} />
          <Route path="/timer-bar-eye" element={<TimerBarEye />} />
        </Routes>
      </div>
    </Router>
=======
      <>
        <HeaderBar/>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/mainscreen" element={<MainScreen />} />
            <Route path="/main" element={<Main />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/neckstretching" element={<NeckStretching />} />
            <Route path="/neckstretching-second" element={<NeckStretchingSecond />} />
            <Route path="/shoulderstretching" element={<ShoulderStretching />} />
            <Route path="/shoulderstretching-second" element={<ShoulderStretchingSecond />} />
            <Route path="/shoulderstretching-third" element={<ShoulderStretchingThird />} />
            <Route path="/shoulderstretching-fourth" element={<ShoulderStretchingFourth />} />
            <Route path="/wriststretching" element={<WristStretching />} />
            <Route path="/wriststretching-second" element={<WristStretchingSecond />} />
            <Route path="/eyestretching" element={<EyeStretching />} />
            <Route path="/eyestretching-second" element={<EyeStretchingSecond />} />
            <Route path="/alarmpage-one" element={<AlarmPageOne />} />
            <Route path="/stretching-choose-page" element={<StretchingChoosePage />} />
          </Routes>
      </>
      
        
      </Router>
    
>>>>>>> 25a363600d41424fc092700239e3ab3ec51e6e11
    
    
  );
}

export default App;
