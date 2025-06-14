import Icon from '../services/Icon';
import AppContext from '../context';
import { useContext } from 'react';

const Info = ({ title, description, children }) => {
  const { setIsOpened } = useContext(AppContext);
  return (
    <div className="empty-basket">
      {children}
      <h3>{title}</h3>
      <p>
        {description}Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>

      <div className="back-button" onClick={() => setIsOpened(false)}>
        <Icon name="arrow" />
        <button>Вернуться назад</button>
      </div>
    </div>
  );
};

export default Info;
