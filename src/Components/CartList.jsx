import Cart from './Cart';

const CartList = ({
  arrOfItems,
  cartItems,
  favItems,
  clickToAdd,
  clickToFavourite,
  isLoading,
}) => {
  const renderItems = () => {
    return (isLoading ? [...Array(8)] : arrOfItems).map((item, index) => {
      return (
        <Cart
          key={index}
          onAdd={clickToAdd}
          onFavourite={clickToFavourite}
          favStatus={favItems.some((obj) => obj.id_ === item.id_)}
          added={cartItems.some((obj) => obj.id_ === item.id_)}
          loading={isLoading}
          {...item}
        />
      );
    });
  };

  return <div className="items-list">{renderItems()}</div>;
};

export default CartList;
