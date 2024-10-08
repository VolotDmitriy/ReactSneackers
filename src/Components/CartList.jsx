
import Cart from "./Cart";


const CartList = ({arrOfItems, cartItems, clickToAdd, clickToFavourite, favStatus, added}) =>{

    return (
        <div className="items-list">
            {arrOfItems.map((item)=> {
                const isAdded = cartItems.some((obj) => obj.id_ === item.id_);
                return(
                  <Cart
                    key={item.id_}
                    id_={item.id_}
                    title={item.title}
                    price={item.price}
                    imgURL={item.imgURL}
                    onAdd={clickToAdd}
                    onFavourite={clickToFavourite}
                    favStatus={false}
                    added={isAdded}
                  />
                )}
            )}
        </div>
    );
}

export default CartList;
