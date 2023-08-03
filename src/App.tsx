import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PokedexCoverContext } from './utils/pokedex-cover-context';
import { PokedexCover } from './components/pokedex-cover/pokedex-cover';
import { Pokedex } from './components/pokedex/pokedex';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <PokedexCoverContext.Provider value={{loading, setLoading}}>
      <div className="app">
        <PokedexCover open={!loading} click={() => setLoading(false)} />
        <Pokedex />
      </div>
    </PokedexCoverContext.Provider>
  );
}

export default App;
