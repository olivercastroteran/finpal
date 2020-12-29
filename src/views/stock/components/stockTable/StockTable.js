import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './StockTable.scss';
import { english, spanish } from '../../../../languages';
import StockItem from './stockItem/StockItem';
import StockItemEdit from './stockItemEdit/StockItemEdit';

const StockTable = () => {
  const stock = useSelector((state) => state.finance.stock);
  const language = useSelector((state) => state.settings.language);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.stock.table });
    } else if (language === 'spanish') {
      setContent({ ...spanish.stock.table });
    }
  }, [language]);

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
        {!isEditing
          ? stock?.map((item) => <StockItem key={item.id} {...item} />)
          : stock.map((item) => <StockItemEdit key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default StockTable;
