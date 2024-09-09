import Icon from "../services/Icon";
import {priceCounter} from "../services/priceCounter";

const Drawer = ({items = [], onRemove, onCloseBasket}) => {

    const isEmpty = items.length === 0;

    return (

        <div className="overlay" onClick={onCloseBasket}>
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
                <h2>Корзина</h2>

                {isEmpty &&
                    <div className="empty-basket">
                        <Icon name="emptyBasket"/>
                        <h3>Корзина пустая</h3>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

                        <div className="back-button" onClick={onCloseBasket}>
                            <Icon name="arrow"/>
                            <button>Вернуться назад</button>
                        </div>
                    </div>
                }

                {!isEmpty &&
                    <>
                        <div className="shopping-cart-list">
                            {items.map((item) =>
                                <div className="shopping-cart-item">
                                    <img className="item__img" src={item.imgURL} alt="sneakers"/>
                                    <div className="shopping-cart-item__info">
                                        <span>{item.title}</span>
                                        <p>{item.price} руб.</p>
                                    </div>
                                    <div className="cancel-button" onClick={() => onRemove(item.id_)}>
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
                    </>
                }


            </div>

        </div>
    );
}

export default Drawer;