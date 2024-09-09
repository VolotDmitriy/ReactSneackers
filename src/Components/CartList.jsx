
import Cart from "./Cart";


const CartList = ({arrOfItems, clickPlus}) =>{

    return (
        <div className="items-list">
            {arrOfItems.map((item)=>
                <Cart
                    key={item.id_}
                    id_={item.id_}
                    title={item.title}
                    price={item.price}
                    imgURL={item.imgURL}
                    onAdd={clickPlus}
                />
            )}
        </div>
    );
}

export default CartList;
