import CartList from '../Components/CartList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Info from '../Components/Info';
import Icon from '../services/Icon';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/orders');
        if (isMounted) {
          setOrders(data);
        }
      } catch (error) {
        alert('Ошибка при заказе');
      }
    };

    getOrders();

    return () => {
      isMounted = false;
    };
  }, []);

  const isEmpty = orders.length === 0;
  return (
    <div className="content">
      {!isEmpty ? (
        <div>
          <div className="content-search">
            <h1>Мои заказы</h1>
          </div>
          {orders.map((order, index) => (
            <div key={order.id} style={{ marginTop: '30px' }}>
              <h2>Заказ №{index + 1}</h2>
              <div className="demarcation-line" style={{ marginTop: '10px' }}>
                <span></span>
              </div>
              <CartList arrOfItems={order.items} hide />
            </div>
          ))}
        </div>
      ) : (
        <Info
          title="Вы ничего не заказали"
          description="Вы нищеброд? Оформите хотя бы один заказ."
          toMainPage
        >
          <Icon name="emptyOrders" />
        </Info>
      )}
    </div>
  );
};

export default Orders;
