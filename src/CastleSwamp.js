import './CastleSwamp.css';

export default function CastleSwamp({ swampIsOpen }) {
  return (
    <div className={swampIsOpen ? 'open' : 'closed'}>
      {
        swampIsOpen
          ? <img src='../Far_Far_Away.jpeg'/>
          : <img src='../potty.jpeg'/>
      }
    </div>
  );
}