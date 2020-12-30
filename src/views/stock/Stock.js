import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StockImg } from '../../assets/images';
import { Header } from '../../components';
import { AddStockForm } from './components';
import StockTable from './components/stockTable/StockTable';
import './Stock.scss';

const Stock = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  const getSearchTerm = (searchTxt) => {
    setSearchTerm(searchTxt);
  };

  return (
    <div className="stock content">
      <Header getSearchTerm={getSearchTerm} />
      <div className="stock__content">
        <AddStockForm />
        <StockTable searchTerm={searchTerm} />
      </div>
      <StockImg className="stock__img" />
    </div>
  );
};

export default Stock;
