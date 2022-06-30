export default function Character({ character }) {
  return (
    <div className="character">
      {character === 'shrek' && <img alt="shrek" src='../shrek.png' height={130}/>}
      {character === 'donkey' && <img alt="donkey" src='../donkey.png' height={130}/>}
      {character === 'lord-farquaad' && <img alt="lord-farquaad" src='../lord-farquaad.png' height={130}/>}
      {character === 'princess-fiona' && <img alt="princess-fiona" src='../princess-fiona.png' height={130}/>}
      {character === 'pinocchio' && <img alt="pinocchio" src='../pinocchio.png' height={130}/>}
      {character === 'gingerbread-man' && <img alt="gingerbread-man" src='../gingerbread-man.png' height={130}/>}
      {character === 'fairy-godmother' && <img alt="fairy-godmother" src='../fairy-godmother.png' height={130}/>}
      {character === 'puss-in-boots' && <img alt="puss-in-boots" src='../puss-in-boots.png' height={130}/>}
    </div>
  );
}