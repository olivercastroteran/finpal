import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StockImg } from '../../assets/images';
import { Header } from '../../components';
import { AddStockForm } from './components';
import './Stock.scss';

const Stock = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  return (
    <div className="stock content">
      <Header />
      <div className="stock__content">
        <AddStockForm />
      </div>
      <StockImg className="stock__img" />
    </div>
  );
};

export default Stock;
