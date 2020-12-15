import { useState } from 'react';
import './FinPalCard.scss';
import CardImg from '../../assets/images/card.svg';
import ToggleBtn from '../UI/toggleBtn/ToggleBtn';

const FinPalCard = () => {
  const [isCardBlock, setIsCardBlock] = useState(false);

  const style = {
    backgroundImage: `url(${CardImg})`,
  };

  return (
    <div className="finpal-card" style={style}>
      <div className="finpal-card__money">
        <p>
          $ 69,699.<small>00</small>
        </p>
      </div>
      <ToggleBtn
        isToggleOn={isCardBlock}
        changeToggle={() => setIsCardBlock(!isCardBlock)}
      />
    </div>
  );
};

export default FinPalCard;
