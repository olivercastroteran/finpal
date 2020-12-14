import { useSelector } from 'react-redux';
import FinPalCard from '../../../../components/finPalCard/FinPalCard';
import './GlobalInfo.scss';

const GlobalInfo = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <div className={isDarkMode ? 'global-info dark' : 'global-info'}>
      <div className="global-info__top">
        <FinPalCard />
      </div>

      <div className="global-info__bottom">
        <div className="global-info__incomes"></div>
        <div className="global-info__expenses"></div>
        <div className="global-info__debts"></div>
      </div>
    </div>
  );
};

export default GlobalInfo;
