import CartList from '../Components/CartList';

const Favourite = ({
  cartItems,
  favouriteItems,
  addItemsToFavourite,
  addItemToCartList,
  isLoading,
}) => {
  return (
    <div className="content">
      <div className="content-search">
        <h1>Все закладки</h1>
      </div>

      <CartList
        arrOfItems={favouriteItems}
        cartItems={cartItems}
        favItems={favouriteItems}
        clickToAdd={addItemToCartList}
        clickToFavourite={addItemsToFavourite}
        favStatus={true}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Favourite;
