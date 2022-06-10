export default function Character({ character }) {
  return (
    <div className="character">
      {character === 'shrek' && <img src='../shrek.png' height={130}/>}
      {character === 'donkey' && <img src='../donkey.png' height={130}/>}
      {character === 'lord-farquaad' && <img src='../lord-farquaad.png' height={130}/>}
      {character === 'princess-fiona' && <img src='../princess-fiona.png' height={130}/>}
      {character === 'pinocchio' && <img src='../pinocchio.png' height={130}/>}
      {character === 'gingerbread-man' && <img src='../gingerbread-man.png' height={130}/>}
      {character === 'fairy-godmother' && <img src='../fairy-godmother.png' height={130}/>}
      {character === 'puss-in-boots' && <img src='../puss-in-boots.png' height={130}/>}
    </div>
  );
}