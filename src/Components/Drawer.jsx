import Icon from "../services/Icons/Icon";

const Drawer = () =>{
    return (

        <div className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>

                <div className="shopping-cart-list">
                    <div className="shopping-cart-item">

                        <img className="item__img" src="/images/1.png" alt="sneakers"/>
                        <div className="shopping-cart-item__info">
                            <span>Мужские Кроссовки Nike Air Max 270</span>
                            <p>12 999 руб.</p>
                        </div>
                        <Icon name="cancel-button"/>
                    </div>
                    <div className="shopping-cart-item">

                        <img className="item__img" src="/images/1.png" alt="sneakers"/>
                        <div className="shopping-cart-item__info">
                            <span>Мужские Кроссовки Nike Air Max 270</span>
                            <p>12 999 руб.</p>
                        </div>
                        <Icon name="cancel-button"/>
                    </div>
                    <div className="shopping-cart-item">

                        <img className="item__img" src="/images/1.png" alt="sneakers"/>
                        <div className="shopping-cart-item__info">
                            <span>Мужские Кроссовки Nike Air Max 270</span>
                            <p>12 999 руб.</p>
                        </div>
                        <Icon name="cancel-button"/>
                    </div>

                </div>

                <div className="total-shopping">
                    <div className="total-element">
                        <span>Итог: </span>
                        <div className="line"></div>
                        <span className="total-element__number">21 498 руб.</span>
                    </div>
                    <div className="total-element">
                        <span>Налог 5%: </span>
                        <div className="line"></div>
                        <span className="total-element__number">1074 руб.</span>
                    </div>
                    <button className="place-an-order-btn">Оформить заказ</button>
                </div>

            </div>

        </div>
    );
}

export default Drawer;