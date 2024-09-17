
import Cart from "./Cart";


const CartList = ({arrOfItems, clickToAdd, clickToFavourite, onRemoveFavourite, favStatus}) =>{

    return (
        <div className="items-list">
            {arrOfItems.map((item)=>
                <Cart
                    key={item.id_}
                    id_={item.id_}
                    title={item.title}
                    price={item.price}
                    imgURL={item.imgURL}
                    onAdd={clickToAdd}
                    onFavourite={clickToFavourite}
                    onRemoveFavourite={onRemoveFavourite}
                    favStatus={favStatus}
                />
            )}
        </div>
    );
}

export default CartList;
