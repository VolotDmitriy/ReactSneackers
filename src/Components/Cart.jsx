import Icon from "../services/Icon";
import "../services/SpaceNumberInsertion";
import {SpaceNumberInsertion} from "../services/SpaceNumberInsertion";
import {useState} from "react";

const Cart = ({title, price, imgURL, onAdd}) =>{

    const [isAdded, setIsAdded] = useState(false);

    const handleAddButton = () => {
        setIsAdded(!isAdded);
        onAdd({title, price, imgURL});
    }

    return (
        <div className="item">
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