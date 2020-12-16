import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FinPalCard from '../../../../components/finPalCard/FinPalCard';
import './GlobalInfo.scss';
import { DebtsIcon, ExpensesIcon, IncomesIcon } from '../../../../assets/icons';
import { english, spanish } from '../../../../languages';

const GlobalInfo = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.dashboard.globalBalance });
    } else if (language === 'spanish') {
      setContent({ ...spanish.dashboard.globalBalance });
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <div className={isDarkMode ? 'global-info dark' : 'global-info'}>
      <h2>{content?.title}</h2>

      <div className="global-info__top">
        <FinPalCard />
      </div>

      <div className="global-info__bottom">
        <div className="global-info__incomes">
          <IncomesIcon />
          <div className="global-info-data">
            <p>{content?.incomesTxt}</p>
            <p>
              $ 140,568.<small>00</small>
            </p>
          </div>
        </div>
        <div className="global-info__expenses">
          <ExpensesIcon />
          <div className="global-info-data">
            <p>{content?.expensesTxt}</p>
            <p>
              $ 70,869.<small>00</small>
            </p>
          </div>
        </div>
        <div className="global-info__debts">
          <DebtsIcon />
          <div className="global-info-data">
            <p>{content?.debtsTxt}</p>
            <p>
              $ +14,576.<small>00</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalInfo;
