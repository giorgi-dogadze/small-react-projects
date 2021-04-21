import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Subscriber from './components/Subscriber';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import PersonsList from './components/PersonsList';
import StyleSheet from './components/StyleSheet';
import ClickHandler from './components/ClickHandler';
import HoverHandler from './components/HoverHandler';
import Counter from './components/Counter';
import Message from './components/Message';
import TestingAxios from './components/TestingAxios';

function App() {
  return (
    <div className="App">

    <TestingAxios/>



    {/* <Greet name = "gio" lname = "dogadze"/>
    <Message></Message> */}
    {/* <ClickHandler/>
    <HoverHandler/> */}
    {/* <h1 className = {styles.gio}>hi</h1>
    <h1 className = {styles.tako}>hi</h1>
    <h1 className = 'x'>hii</h1>
    <h1 className = 'y'>hii</h1> */}
    {/* <StyleSheet/> */}
    {/* <PersonsList/> */}
    {/* <ParentComponent/> */}
    {/* <Greet name = 'gio' />*/}
    {/* <Greet name = 'takole' /> */}
      
    </div>
  );
}

export default App;
