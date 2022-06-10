import './App.css';
import { useState } from 'react';
import CastleSwamp from './CastleSwamp';
import Character from './Characters';
import react from 'react';



function App() {
  
  const [swampIsOpen, setSwampIsOpen] = useState(true);
  const [characters, setCharacters] = useState(['shrek', 'donkey', 'lord farquaad', 'princess fiona', 'pinocchio', 'gingerbread man', 'fairy godmother', 'puss in boots']);
  const [shrekSize, setShrekSize] = useState([100]);
  const [knightSize, setKnightSize] = useState([100]);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='fight'>
          <div className='shrek'>
            <img src="../shrek.png" width={shrekSize}/>
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
    </div>
  );
}

export default App;
