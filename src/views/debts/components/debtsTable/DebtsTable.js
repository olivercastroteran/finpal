import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DebtItem from './debtItem/DebtItem';
import './DebtsTable.scss';
import { english, spanish } from '../../../../languages';

const DebtsTable = ({ selectedDate, searchTerm }) => {
  const debts = useSelector((state) => state.finance.debts);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.debts.table });
    } else if (language === 'spanish') {
      setContent({ ...spanish.debts.table });
    }
  }, [language]);

  let searchArrDebts = debts;

  if (searchTerm !== '') {
    searchArrDebts = searchArrDebts.filter((debt) =>
      debt?.name.includes(searchTerm)
    );
  }

  return (
    <div className="debts-table">
      <div className="debts-table__header">
        <h3>{content?.type}</h3>
        <h3>{content?.name}</h3>
        <h3 id="desc">{content?.description}</h3>
        <h3>{content?.amount}</h3>
        <h3>{content?.date}</h3>
        <h3>{content?.actions}</h3>
      </div>
      <div className="debts-table__content">
        {!selectedDate ||
        selectedDate === 'Show All' ||
        selectedDate === 'Mostrar Todo'
          ? searchArrDebts?.map((debt) => <DebtItem key={debt.id} {...debt} />)
          : searchArrDebts
              ?.filter((debt) => debt.date === selectedDate)
              .map((debt) => <DebtItem key={debt.id} {...debt} />)}
      </div>
    </div>
  );
};

export default DebtsTable;
