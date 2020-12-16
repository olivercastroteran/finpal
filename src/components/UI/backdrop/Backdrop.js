import './Backdrop.scss';

const Backdrop = ({ clicked }) => {
  return <div className="backdrop" onClick={clicked}></div>;
};

export default Backdrop;
