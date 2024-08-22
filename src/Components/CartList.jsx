
import Cart from "./Cart";


const CartList = ({arrOfItems, clickPlus}) =>{



    return (
        <div className="items-list">
            {arrOfItems.map(item =>
                <Cart title={item.title} price={item.price} imgURL={item.img_url} onAdd={clickPlus}/>
            )}
        </div>
    );
}

export default CartList;
