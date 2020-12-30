import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './StockTable.scss';
import { english, spanish } from '../../../../languages';
import StockItem from './stockItem/StockItem';

const StockTable = ({ searchTerm }) => {
  const stock = useSelector((state) => state.finance.stock);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.stock.table });
    } else if (language === 'spanish') {
      setContent({ ...spanish.stock.table });
    }
  }, [language]);

  let searchArrStock = stock;

  if (searchTerm !== '') {
    searchArrStock = searchArrStock.filter((item) =>
      item?.name.includes(searchTerm)
    );
  }

  return (
    <div className="stock-table">
      <div className="stock-table__header">
        <h3>{content?.code}</h3>
        <h3>{content?.name}</h3>
        <h3>{content?.price}</h3>
        <h3>{content?.quantity}</h3>
        <h3>{content?.total}</h3>
        <h3>{content?.actions}</h3>
      </div>
      <div className="stock-table__content">
        {searchArrStock?.map((item) => (
          <StockItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StockTable;
