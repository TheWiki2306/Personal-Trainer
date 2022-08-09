import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import TopSection from './components/topsection/TopSection';
import SlidingText from './components/sliding text/SlidingText';
import SecondSection from './components/second section/SecondSection';
import SecondSectionHead from './components/second section head/SecondSectionHead';
import SlidingSideBar from './components/sliding sidebar/SlidingSideBar';
import PassHead from './components/Pass/PassHead';

function App() {
  return (
    <div>
      <Nav />
      <TopSection />
      <SlidingText />
      <SecondSectionHead />
      <SecondSection />
      <SlidingSideBar />
      <PassHead />
    </div>
  );
}

export default App;
