import Icon from "../services/Icons/Icon";


const Cart = () =>{
    return (
        <div className="item">
            <img className="item__img" src="/images/1.png" alt="sneakers"/>
            <p className="item__sign">Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="item__info">

                <div className="item__price">
                    <span>Цена:</span>
                    <p>12 999 руб.</p>
                </div>

                <button className="item__add-button">
                    <Icon name="plus"/>
                </button>
            </div>

        </div>
    );
}
export default Cart;