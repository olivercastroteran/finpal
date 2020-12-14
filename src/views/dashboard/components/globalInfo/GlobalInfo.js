import FinPalCard from '../../../../components/finPalCard/FinPalCard';
import './GlobalInfo.scss';

const GlobalInfo = () => {
  return (
    <div className="global-info">
      <div className="global-info__top">
        <FinPalCard />
      </div>

      <div className="global-info__bottom">
        <h2>Data</h2>
      </div>
    </div>
  );
};

export default GlobalInfo;
