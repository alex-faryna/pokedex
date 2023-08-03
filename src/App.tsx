import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PokedexDeviceLoadingContext } from './utils/pokedexDeviceLoadingContext';
import { PokedexCover } from './components/pokedex-cover/pokedex-cover';
import { Pokedex } from './components/pokedex/pokedex';

function Test1() {
  const context = useContext(PokedexDeviceLoadingContext);
  return <span onClick={() => context.setLoading(true)}>Hello</span>
}

function Test2() {
  const context = useContext(PokedexDeviceLoadingContext);
  return <span onClick={() => context.setLoading(false)}>Hello 2</span>
}

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <PokedexDeviceLoadingContext.Provider value={{loading, setLoading}}>
      <div className="app">
        <PokedexCover open={!loading} click={() => setLoading(false)} />
        <Pokedex />
      </div>
    </PokedexDeviceLoadingContext.Provider>
  );
}

export default App;
