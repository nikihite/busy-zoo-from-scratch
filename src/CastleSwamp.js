import './CastleSwamp.css';

export default function CastleSwamp({ swampIsOpen }) {
  return (
    <div className={swampIsOpen ? 'open' : 'closed'}>
      {
        swampIsOpen
          ? <img alt="far-far-away" src='../Far_Far_Away.jpeg'/>
          : <img alt="potty" src='../potty.jpeg'/>
      }
    </div>
  );
}