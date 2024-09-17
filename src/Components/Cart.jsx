import Icon from "../services/Icon";
import "../services/SpaceNumberInsertion";
import {SpaceNumberInsertion} from "../services/SpaceNumberInsertion";
import {useState} from "react";

const Cart = ({id_, title, price, imgURL, onAdd, onFavourite, onRemoveFavourite, favStatus = false}) =>{

    const [isAdded, setIsAdded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(favStatus);

    const handleAddButton = () => {
        setIsAdded(!isAdded);
        onAdd({id_, title, price, imgURL});
    }

    const handleFavouriteButton = () =>{
        setIsFavourite(!isFavourite);
        isFavourite ? onRemoveFavourite(id_) : onFavourite ({id_, title, price, imgURL})

    }


    return (
        <div className={`item ${id_}`}>
            <div className="favourite" onClick={() => handleFavouriteButton ()}>
                <Icon  name={isFavourite ? "favourite_active" : "favourite_nonactive"}/>
            </div>
            <img className="item__img" src={imgURL} alt="sneakers"/>
            <p className="item__sign">{title}</p>

            <div className="item__info">

                <div className="item__price">
                    <span>Цена:</span>
                    <p>{SpaceNumberInsertion(price)}</p>
                </div>

                <div className="item__add-button" onClick={handleAddButton}>
                    <Icon  name={isAdded ? "added-cart" : "plus"} />
                </div >


            </div>

        </div>
    );
}
export default Cart;