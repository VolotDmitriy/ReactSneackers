import { priceCounter } from './services/priceCounter';
import AppContext from './context';
import { useContext } from 'react';

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = priceCounter(cartItems);

  return {
    cartItems,
    setCartItems,
    totalPrice,
  };
};
