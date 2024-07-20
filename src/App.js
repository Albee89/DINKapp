import React from 'react';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CandidDates from './components/CandidDates/CandidDates';
import TheEssentials from './components/TheEssentials/TheEssentials';
import SwipeItem from './components/SwipeItems';
import DatingInTheWild from './components/DatingInTheWild/DatingInTheWild';
import SpeedDate from './components/SpeedDates/SpeedDate';
import ChatScreen from './components/ChatScreen/ChatScreen';
import InChatScreen from './components/InChatScreen/InChatScreen';
import Header from './components/Header/Header';

const App = () => {
  return (
      <div className="App">
      <Header/>
       <ProfilePage />
        <ChatScreen /> 
        <InChatScreen/>
        <CandidDates/>
        <TheEssentials/>
        <SwipeItem/>
        <DatingInTheWild />
        <SpeedDate/>
      </div>

  );
};

export default App;
