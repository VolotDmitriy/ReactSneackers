import Icon from '../services/Icon';
import '../services/SpaceNumberInsertion';
import { SpaceNumberInsertion } from '../services/SpaceNumberInsertion';
import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../context';

const Cart = ({
  id_,
  title,
  price,
  imgURL,
  onAdd,
  onFavourite,
  loading = false,
}) => {
  const { isItemAdded, isItemFavourite } = useContext(AppContext);

  const handleAddButton = () => {
    onAdd({ id_, title, price, imgURL });
  };

  const handleFavouriteButton = () => {
    onFavourite({ id_, title, price, imgURL });
  };

  return (
    <div className={`item ${id_}`}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavourite && (
            <div className="favourite" onClick={() => handleFavouriteButton()}>
              <Icon
                name={
                  isItemFavourite(id_)
                    ? 'favourite_active'
                    : 'favourite_nonactive'
                }
              />
            </div>
          )}

          <img className="item__img" src={imgURL} alt="sneakers" />
          <p className="item__sign">{title}</p>

          <div className="item__info">
            <div className="item__price">
              <span>Цена:</span>
              <p>{SpaceNumberInsertion(price)}</p>
            </div>

            {onAdd && (
              <div className="item__add-button" onClick={handleAddButton}>
                <Icon name={isItemAdded(id_) ? 'added-cart' : 'plus'} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
