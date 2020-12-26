import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FinPalCard from '../../../../components/finPalCard/FinPalCard';
import './GlobalInfo.scss';
import { DebtsIcon, ExpensesIcon, IncomesIcon } from '../../../../assets/icons';
import { english, spanish } from '../../../../languages';
import { formatMoney } from '../../../../shared/utility';

const GlobalInfo = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const incomes = useSelector((state) => state.finance.incomes);
  const expenses = useSelector((state) => state.finance.expenses);
  const debts = useSelector((state) => state.finance.debts);
  const [total, setTotal] = useState(0);
  const [totalInc, setTotalInc] = useState(0);
  const [totalExp, setTotalExp] = useState(0);
  const [totalDebts, setTotalDebts] = useState(0);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.dashboard.globalBalance });
    } else if (language === 'spanish') {
      setContent({ ...spanish.dashboard.globalBalance });
    }
    // eslint-disable-next-line
  }, [language]);

  const calcTotal = useCallback(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    let totalDebtsAll = 0;

    incomes.forEach((inc) => (totalIncomes += inc.amount));
    expenses.forEach((exp) => (totalExpenses += exp.amount));
    debts.forEach((debt) => {
      if (debt.type === 'toMe') {
        totalDebtsAll += debt.amount;
      } else if (debt.type === 'fromMe') {
        totalDebtsAll -= debt.amount;
      }
    });

    setTotalInc(totalIncomes);
    setTotalExp(totalExpenses);
    setTotalDebts(totalDebtsAll);
    setTotal(totalIncomes - totalExpenses);
  }, [expenses, incomes, debts]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  return (
    <div className={isDarkMode ? 'global-info dark' : 'global-info'}>
      <h2>{content?.title}</h2>

      <div className="global-info__top">
        <FinPalCard amount={total} />
      </div>

      <div className="global-info__bottom">
        <div className="global-info__incomes">
          <IncomesIcon />
          <div className="global-info-data">
            <p>{content?.incomesTxt}</p>
            <p>
              {formatMoney(totalInc)[0]}
              <small>{formatMoney(totalInc)[1]}</small>
            </p>
          </div>
        </div>
        <div className="global-info__expenses">
          <ExpensesIcon />
          <div className="global-info-data">
            <p>{content?.expensesTxt}</p>
            <p>
              {formatMoney(totalExp)[0]}
              <small>{formatMoney(totalExp)[1]}</small>
            </p>
          </div>
        </div>
        <div className="global-info__debts">
          <DebtsIcon />
          <div className="global-info-data">
            <p>{content?.debtsTxt}</p>
            <p>
              {formatMoney(totalDebts)[0]}
              <small>{formatMoney(totalDebts)[1]}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalInfo;
