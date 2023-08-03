import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PokedexDeviceLoadingContext } from './utils/pokedexDeviceLoadingContext';
import { PokedexCover } from './components/pokedex-cover/pokedex-cover';

function Test1() {
  const context = useContext(PokedexDeviceLoadingContext);
  return <span onClick={() => context.setLoading(true)}>Hello</span>
}

function Test2() {
  const context = useContext(PokedexDeviceLoadingContext);
  return <span onClick={() => context.setLoading(false)}>Hello 2</span>
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <PokedexDeviceLoadingContext.Provider value={{loading, setLoading}}>
      <div className="app">
        <PokedexCover open={!loading} click={() => setLoading(false)} />
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
}

export default App;
