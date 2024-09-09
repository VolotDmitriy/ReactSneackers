import Icon from "../services/Icon";
import {priceCounter} from "../services/priceCounter";

const Drawer = ({items = [], onRemove, onCloseBasket}) =>{

    return (

        <div className="overlay" onClick={onCloseBasket}>
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
                <h2>Корзина</h2>

                <div className="shopping-cart-list">
                    {items.map((item) =>
                        <div className="shopping-cart-item">
                            <img className="item__img" src={item.imgURL} alt="sneakers"/>
                            <div className="shopping-cart-item__info">
                                <span>{item.title}</span>
                                <p>{item.price} руб.</p>
                            </div>
                            <div className = "cancel-button" onClick={() => onRemove(item.id_)}>
                                <Icon name="cancel-button"/>
                            </div>

                        </div>
                    )}
                </div>

                <div className="total-shopping">
                    <div className="total-element">
                        <span>Итог: </span>
                        <div className="line"></div>
                        <span className="total-element__number">{priceCounter(items)[0]} руб.</span>
                    </div>
                    <div className="total-element">
                        <span>Налог 5%: </span>
                        <div className="line"></div>
                        <span className="total-element__number">{priceCounter(items)[1]} руб.</span>
                    </div>
                    <button className="place-an-order-btn">Оформить заказ</button>
                </div>

            </div>

        </div>
    );
}

export default Drawer;