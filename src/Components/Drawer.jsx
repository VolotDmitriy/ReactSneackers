import Icon from "../services/Icon";

const Drawer = ({items = [], onCloseBasket}) =>{

    const priceCounter = () =>{
        let count = 0;
        items.map(items => count += items.price);
        console.log(count);
        return [count, count * 0.05];
    }


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
                            <Icon name="cancel-button"/>
                        </div>
                    )}
                </div>

                <div className="total-shopping">
                    <div className="total-element">
                        <span>Итог: </span>
                        <div className="line"></div>
                        <span className="total-element__number">{priceCounter()[0]} руб.</span>
                    </div>
                    <div className="total-element">
                        <span>Налог 5%: </span>
                        <div className="line"></div>
                        <span className="total-element__number">{priceCounter()[1]} руб.</span>
                    </div>
                    <button className="place-an-order-btn">Оформить заказ</button>
                </div>

            </div>

        </div>
    );
}

export default Drawer;