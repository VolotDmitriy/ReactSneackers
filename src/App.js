import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { priceCounter } from "./services/priceCounter";
import { SpaceNumberInsertion } from "./services/SpaceNumberInsertion";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from 'react-router-dom';
import Favourite from "./pages/Favourite";

function App() {
  const [isOpened, setIsOpened] = useState(false); // MARK FOR OPEN STATUS OF MODAL (CART LIST)

  const [items, setItems] = useState([]); // MAIN ITEMS LIST
  const [cartItems, setCartItems] = useState([]); // ITEMS WHICH WAS ADDED TO SHOP CART
  const [favouriteItems, setFavouriteItems] = useState([]);


  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
    updateCartItems();
    updateFavouriteItems();
  }, []);

  useEffect(() => {
    isOpened && updateCartItems();
  }, [isOpened]);

  useEffect(() => {
    if (location.pathname === "/favourite") {
      updateFavouriteItems();
    }
  }, [location]);
  const updateCartItems = () => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => setCartItems(res.data));
  };
  const updateFavouriteItems = () => {
    axios
      .get("http://localhost:5000/favourite")
      .then((res) => setFavouriteItems(res.data));
  };
  const addItemToCartList = (obj) => {
    axios.post("http://localhost:5000/cart", obj);
    setCartItems([...cartItems, obj]);
  };
  const addItemsToFavourite = (obj) => {
    axios.post("http://localhost:5000/favourite", obj);
    setFavouriteItems([...favouriteItems, obj]);
  };
  const removeItemFromCartList = (id) => {
    console.log(id)
    const deleteItem = cartItems.find((item) => item.id_ === id);
    console.log(deleteItem)
    console.log(favouriteItems)
    if (deleteItem) {
      axios.delete(`http://localhost:5000/cart/${deleteItem.id}`);
      setCartItems(cartItems.filter((item) => item.id_ !== deleteItem.id_));
    }
  };

  const removeItemFromFavouriteList = (id) => {
    console.log(id)
    const deleteItem = favouriteItems.find((item) => item.id_ === id);
    console.log(deleteItem)
    console.log(favouriteItems)
    if (deleteItem) {
      axios.delete(`http://localhost:5000/favourite/${deleteItem.id}`);
      setFavouriteItems(favouriteItems.filter((item) => item.id_ !== deleteItem.id_));
    }
    console.log(favouriteItems)
  };

  return (
    <div className="wrapper">
      {isOpened && (
        <Drawer
          items={cartItems}
          onRemove={removeItemFromCartList}
          onCloseBasket={() => setIsOpened(false)}
        />
      )}

      <Header
        onClickCartBasket={() => setIsOpened(true)}
        totalPrice={SpaceNumberInsertion(priceCounter(cartItems)[0])}
      />

      <div className="demarcation-line">
        <span></span>
      </div>

      <Routes>
        <Route path={"/"} element={
            <Home
              items={items}
              addItemToCartList={addItemToCartList}
              addItemsToFavourite={addItemsToFavourite}
              removeItemFromFavouriteList={removeItemFromFavouriteList}
            />
        }/>
        <Route path={"/favourite"} element={
            <Favourite
              favouriteItems={favouriteItems}
              addItemToCartList={addItemToCartList}
              addItemsToFavourite={addItemsToFavourite}
              removeItemFromFavouriteList={removeItemFromFavouriteList}
            />
        }/>
      </Routes>
    </div>
  );
}

export default App;
