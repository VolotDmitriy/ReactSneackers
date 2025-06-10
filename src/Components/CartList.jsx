import Cart from './Cart';
import AppContext from '../context';
import { useContext } from 'react';

const CartList = ({ arrOfItems }) => {
  const state = useContext(AppContext);

  const renderItems = () => {
    return (state.isLoading ? [...Array(8)] : arrOfItems).map((item, index) => {
      return (
        <Cart
          key={index}
          onAdd={state.addItemToCartList}
          onFavourite={state.addItemsToFavourite}
          loading={state.isLoading}
          {...item}
        />
      );
    });
  };
  return <div className="items-list">{renderItems()}</div>;
};

export default CartList;
