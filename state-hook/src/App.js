import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookWithObject from './components/HookWithObject';
import HooksWithArray from './components/HooksWithArray';
import EffectHookCounter from './components/EffectHookCounter';
import TimerWithHook from './components/TimerWithHook';
import DataFetching from './components/DataFetching';
import FirstUseReducre from './components/FirstUseReducre';
import DataFetchingWithUseReduce from './components/DataFetchingWithUseReduce';
import HookTimerWithRef from './components/HookTimerWithRef';
import MemoHook from './components/MemoHook';
import CakeContainer from './components/CakeContainer';



function App() {
  return (

      <div className="App">
        
        {/* <CakeContainer/> */}

        {/* <MemoHook/> */}
        <HookCounter/>
        {/* <HookTimerWithRef/> */}
        {/* <DataFetchingWithUseReduce/> */}
        {/* <FirstUseReducre/> */}
        {/* <DataFetching/> */}
        {/* <TimerWithHook/> */}
        {/* <EffectHookCounter/> */}
        {/* <HooksWithArray/> */}
        {/* <HookWithObject/> */}
        {/* <ClassCounter/>
        <HookCounter/> */}
      </div>
    
  );
}

export default App;
