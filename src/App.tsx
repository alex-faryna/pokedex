import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PokedexDeviceLoadingContext } from './utils/pokedexDeviceLoadingContext';
import {SimplePokeBall} from "./components/pokeball/pokeball";

function Test1() {
  const context = useContext(PokedexDeviceLoadingContext);
  return <span onClick={() => context.setLoading(true)}>Hello</span>
}

function Test2() {
  const context = useContext(PokedexDeviceLoadingContext);
  return <span onClick={() => context.setLoading(false)}>Hello 2</span>
}

function DeviceLoaderPanel() {
  const [animation, setAnimation] = useState(false);

  return <div className={`device-loader ${animation ? 'animation' : ''}`} onClick={() => setAnimation(!animation)}>
    <div className='top'>
      <div className='pokeball-upper-half'>
        <div className='pokeball-button' />
      </div>
    </div>
    <div className='bottom'>
      <div className='pokeball-lower-half' >
        <div className='pokeball-lower-border'/>
      </div>
    </div>
  </div>
}

function PokeBall() {
  return <div className="pokeball">
    <div className="pokeball-button">
      <div className='pokeball-button-inner'></div>
    </div>
  </div>
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <PokedexDeviceLoadingContext.Provider value={{loading, setLoading}}>
      <div className="app">
        <DeviceLoaderPanel />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <span>{ loading ? 'Loading...' : 'Done' }</span>
          <Test1 />
          <Test2 />
        </header>
      </div>
    </PokedexDeviceLoadingContext.Provider>
  );
  /*return <>
    <SimplePokeBall />
  </>*/
}

export default App;
