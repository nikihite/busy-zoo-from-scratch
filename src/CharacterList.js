import Character from './Characters';

export default function CharacterList({ characters }) {
  return (
    <div className="parade">
      {
        characters.map((character, i) => <Character character={character} key={character + i} />)
      }
    </div>
  );
}