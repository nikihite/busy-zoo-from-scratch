export default function Character({ character }) {
  return (
    <div className="character">
      {character === 'shrek' && <img src='../shrek.png'/>}
      {character === 'donkey' && <img src='../donkey.png'/>}
      {character === 'lord-farquaad' && <img src='../lord-farquaad.png'/>}
      {character === 'princess-fiona' && <img src='../princess-fiona.png'/>}
      {character === 'pinocchio' && <img src='../pinocchio.png'/>}
      {character === 'gingerbread-man' && <img src='../gingerbread-man.png'/>}
      {character === 'fairy-godmother' && <img src='../fairy-godmother.png'/>}
      {character === 'puss-in-boots' && <img src='../puss-in-boots.png'/>}
    </div>
  );
}