import CartList from '../Components/CartList';
import AppContext from '../context';
import { useContext } from 'react';
import Info from '../Components/Info';
import Icon from '../services/Icon';

const Favourite = () => {
  const { favouriteItems } = useContext(AppContext);
  const isEmpty = favouriteItems.length === 0;

  return (
    <div className="content">
      {!isEmpty ? (
        <div>
          <div className="content-search">
            <h1>Все закладки</h1>
          </div>

          <CartList arrOfItems={favouriteItems} />
        </div>
      ) : (
        <Info
          title="Закладок нет :("
          description="Вы ничего не добавляли в закладки"
          toMainPage
        >
          <Icon name="emptyFavourite" />
        </Info>
      )}
    </div>
  );
};

export default Favourite;
