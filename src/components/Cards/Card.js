import { cardData } from '../../data';

function Card() {
  return (
    <div className='portfolio-cards'>
      {cardData.map((cObj) => (
        <div className='card'>
          <img className='card-image' src={cObj.image} alt='Avatar' />
          <div className='AvatarName'>{cObj.text}</div>
        </div>
      ))}
    </div>
  );
}

export { Card };
