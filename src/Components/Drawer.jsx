import Icon from '../services/Icon';
import { priceCounter } from '../services/priceCounter';
import Info from './Info';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context';
import axios from 'axios';

const Drawer = ({ items = [], onRemove, onCloseBasket }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItems } = useContext(AppContext);

  useEffect(() => {
    const countOfOrders = async () => {
      const { data } = await axios.get('http://localhost:5000/orders');
      setOrderId(data.length + 1);
    };
    countOfOrders();
  }, []);

  const clearCart = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/cart');
      await Promise.all(
        data.map((item) => {
          return axios.delete(`http://localhost:5000/cart/${item.id}`);
        })
      );
      setCartItems([]);
    } catch (error) {
      console.log(error);
      alert('Не удалось очистить корзину');
    }
  };

  const clickOrder = async () => {
    try {
      setIsLoading(true);
      await axios.post('http://localhost:5000/orders', {
        items: cartItems,
        price: priceCounter(items),
      });
      await clearCart();
      setIsOrderComplete(true);
    } catch (error) {
      console.log(error);
      alert('Ошибка при создании заказа');
    }
    setIsLoading(false);
  };
  const isEmpty = items.length === 0;

  return (
    <div className="overlay" onClick={onCloseBasket}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <h2>Корзина</h2>

        {isEmpty && (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
          >
            {isOrderComplete ? (
              <Icon name="readyOrder" />
            ) : (
              <Icon name="emptyBasket" />
            )}
          </Info>
        )}

        {!isEmpty && (
          <>
            <div className="shopping-cart-list">
              {items.map((item) => (
                <div className="shopping-cart-item">
                  <img className="item__img" src={item.imgURL} alt="sneakers" />
                  <div className="shopping-cart-item__info">
                    <span>{item.title}</span>
                    <p>{item.price} руб.</p>
                  </div>
                  <div
                    className="cancel-button"
                    onClick={() => onRemove(item.id_)}
                  >
                    <Icon name="cancel-button" />
                  </div>
                </div>
              ))}
            </div>
            <div className="total-shopping">
              <div className="total-element">
                <span>Итог: </span>
                <div className="line"></div>
                <span className="total-element__number">
                  {priceCounter(items)[0]} руб.
                </span>
              </div>
              <div className="total-element">
                <span>Налог 5%: </span>
                <div className="line"></div>
                <span className="total-element__number">
                  {priceCounter(items)[1]} руб.
                </span>
              </div>
              <button
                className="place-an-order-btn"
                onClick={clickOrder}
                disabled={isLoading}
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
