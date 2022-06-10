export default function Character({ character }) {
  return (
    <div className="character">
      {character === 'shrek' && ' 😄'}
      {character === 'donkey' && ' 😄'}
      {character === 'lord farquaad' && ' 😄'}
      {character === 'princess fiona' && ' 😄'}
      {character === 'pinocchio' && ' 😄'}
      {character === 'gingerbread man' && ' 😄'}
      {character === 'fairy godmother' && ' 😄'}
      {character === 'puss in boots' && ' 😄'}
    </div>
  );
}