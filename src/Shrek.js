import './App.css';
import { useState } from 'react';
import CastleSwamp from './CastleSwamp';
import CharacterList from './CharacterList';
import IconButton from './IconButton';
import CustomButton from './CustomButton';

function App() {
  
  const [swampIsOpen, setSwampIsOpen] = useState(true);
  const [characters, setCharacters] = useState(['shrek', 'donkey', 'lord-farquaad', 'princess-fiona', 'pinocchio', 'gingerbread-man', 'fairy-godmother', 'puss-in-boots']);
  const [shrekSize, setShrekSize] = useState(160);
  const [knightSize, setKnightSize] = useState(260);
  
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

  function handleDeleteCharacter() {
    characters.pop();

    setCharacters(characters.slice());
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='fight'>
          <div className='shrek'>
            <img src="../shrek2.png" width={shrekSize}/>
            <div className='button'>
              <CustomButton onClick={() => setShrekSize(shrekSize + 10)}>EAT KNIGHT</CustomButton>
              <CustomButton onClick={() => setShrekSize(shrekSize - 10)}>SPIT OUT THE KNIGHT</CustomButton>
            </div>
          </div>
          <div className='knight'>
            <img src="../knights.png" width={knightSize}/>
            <div className='button'>
              <CustomButton onClick={() => setKnightSize(knightSize + 10)}>HIT SHREK</CustomButton>
              <CustomButton onClick={() => setKnightSize(knightSize - 10)}>SACRIFICE A KNIGHT</CustomButton>
            </div>
          </div>
        </div>
        <CastleSwamp swampIsOpen={swampIsOpen} />
        <CustomButton className='swamp' onClick={() => setSwampIsOpen(!swampIsOpen)}>{swampIsOpen ? 'GO TO SWAMP' : 'GO TO FAR FAR AWAY'}</CustomButton>
      </header>
      <CharacterList characters={characters} />
      <CustomButton alt="Add Shrek" onClick={handleShrekClick}>Add Shrek</CustomButton>
      <CustomButton onClick={handleDonkeyClick}>Add Donkey</CustomButton>
      <CustomButton onClick={handleLordFarquaadClick}>Add Lord Farquaad</CustomButton>
      <CustomButton onClick={handlePrincessFionaClick}>Add Princess Fiona</CustomButton>
      <CustomButton onClick={handleGingerbreadManClick}>Add Gingerbread Man</CustomButton>
      <CustomButton onClick={handleFairyGodmotherClick}>Add Fairy Godmother</CustomButton>
      <CustomButton onClick={handlePinocchioClick}>Add Pinocchio</CustomButton>
      <CustomButton onClick={handlePussInBootsClick}>Add Puss In Boots</CustomButton>
      <IconButton onClick={handleDeleteCharacter} aria-label="delete">Delete Character</IconButton>
    </div>
  );
}

export default App;
