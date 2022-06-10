export default function Character({ character }) {
  return (
    <div className="character">
      {character === 'shrek' && '../public/shrek.png'}
      {character === 'donkey' && '../public/donkey.png'}
      {character === 'lord-farquaad' && '../public/lord-farquaad.png'}
      {character === 'princess-fiona' && '../public/princess-fiona.png'}
      {character === 'pinocchio' && '../public/pinocchio.png'}
      {character === 'gingerbread-man' && '../public/gingerbread-man.png'}
      {character === 'fairy-godmother' && '../public/fairy-godmother.png'}
      {character === 'puss-in-boots' && '../public/puss-in-boots.png'}
    </div>
  );
}