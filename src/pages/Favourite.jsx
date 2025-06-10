import CartList from '../Components/CartList';
import AppContext from '../context';
import { useContext } from 'react';

const Favourite = ({}) => {
  const { favouriteItems } = useContext(AppContext);

  return (
    <div className="content">
      <div className="content-search">
        <h1>Все закладки</h1>
      </div>

      <CartList arrOfItems={favouriteItems} />
    </div>
  );
};

export default Favourite;
