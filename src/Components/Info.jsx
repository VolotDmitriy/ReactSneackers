import Icon from '../services/Icon';
import AppContext from '../context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Info = ({ title, description, toMainPage = false, children }) => {
  const { setIsOpened } = useContext(AppContext);
  return (
    <div className="empty-basket">
      {children}
      <h3>{title}</h3>
      <p>{description}</p>

      {toMainPage ? (
        <Link
          to="/"
          className="back-button"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Icon name="arrow" />
          <span>Вернуться назад</span>
        </Link>
      ) : (
        <div className="back-button" onClick={() => setIsOpened(false)}>
          <Icon name="arrow" />
          <button>Вернуться назад</button>
        </div>
      )}
    </div>
  );
};

export default Info;
