import './App.css';
import { useState } from 'react';
import CastleSwamp from './CastleSwamp';
import Character from './Characters';



function App() {
  
  const [swampIsOpen, setSwampIsOpen] = useState(true);
  const [characters, setCharacters] = useState(['shrek', 'donkey', 'lord farquaad', 'princess fiona', 'pinocchio', 'gingerbread man', 'fairy godmother', 'puss in boots']);
  const [shrekSize, setShrekSize] = useState([100]);
  const [knightSize, setKnightSize] = useState([100]);
  
  function handleShrekClick() {
    characters.push('shrek');

    setCharacters(characters.slice());
  }

  function handleDonkeyClick() {
    characters.push('donkey');

    setCharacters(characters.slice());
  }

  function handleLordFarquaadClick() {
    characters.push('lord-farquaad');

    setCharacters(characters.slice());
  }

  function handlePrincessFionaClick() {
    characters.push('princess-fiona');

    setCharacters(characters.slice());
  }

  function handlePinocchioClick() {
    characters.push('pinocchio');

    setCharacters(characters.slice());
  }

  function handleGingerbreadManClick() {
    characters.push('gingerbread-man');

    setCharacters(characters.slice());
  }

  function handleFairyGodmotherClick() {
    characters.push('fairy-godmother');

    setCharacters(characters.slice());
  }

  function handlePussInBootsClick() {
    characters.push('puss-in-boots');

    setCharacters(characters.slice());
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='fight'>
          <div className='shrek'>
            <img src="../shrek2.png" width={shrekSize}/>
            <div className='button'>
              <button onClick={() => setShrekSize(shrekSize + 1)}>SHREK</button>
              <button onClick={() => setKnightSize(knightSize - 1)}>SHREK</button>
            </div>
          </div>
          <div className='knight'>
            <img src="../knights.png" width={knightSize}/>
            <div className='button'>
              <button onClick={() => setKnightSize(knightSize + 1)}>KNIGHT</button>
              <button onClick={() => setShrekSize(shrekSize - 1)}>KNIGHT</button>
            </div>
          </div>
        </div>
        <CastleSwamp swampIsOpen={swampIsOpen} />
        <button onClick={() => setSwampIsOpen(!swampIsOpen)}>TOGGLE</button>
      </header>
      <Character characters={characters} />
      <button onClick={handleShrekClick}>Add Shrek</button>
      <button onClick={handleDonkeyClick}>Add Donkey</button>
      <button onClick={handleLordFarquaadClick}>Add Lord Farquaad</button>
      <button onClick={handlePrincessFionaClick}>Add Princess Fiona</button>
      <button onClick={handlePinocchioClick}>Add Pinocchio</button>
      <button onClick={handleGingerbreadManClick}>Add Gingerbread Man</button>
      <button onClick={handleFairyGodmotherClick}>Add Fairy Godmother</button>
      <button onClick={handlePussInBootsClick}>Add Puss In Boots</button>
    </div>
  );
}

export default App;
