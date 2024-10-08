import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { priceCounter } from "./services/priceCounter";
import { SpaceNumberInsertion } from "./services/SpaceNumberInsertion";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from 'react-router-dom';
import Favourite from "./pages/Favourite";
import { ca } from 'wait-on/exampleConfig';

function App() {
  const [isOpened, setIsOpened] = useState(false); // MARK FOR OPEN STATUS OF MODAL (CART LIST)

  const [items, setItems] = useState([]); // MAIN ITEMS LIST
  const [cartItems, setCartItems] = useState([]); // ITEMS WHICH WAS ADDED TO SHOP CART
  const [favouriteItems, setFavouriteItems] = useState([]);

  const location = useLocation();

  useEffect(() => {

    async function fetchData () {
      await updateFavouriteItems();
      await updateCartItems();

      const res = await fetch("http://localhost:5000/items");
      const json = await res.json();
      setItems(json);
    }
    fetchData();

  }, []);

  useEffect(() => {
    isOpened && updateCartItems();
  }, [isOpened]);

  useEffect(() => {
    if (location.pathname === "/favourite") {
      updateFavouriteItems();
    }
  }, [location]);
  const updateCartItems = async () => {
    try{
      const res = await  axios.get("http://localhost:5000/cart");
      setCartItems(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  const updateFavouriteItems = async () => {
    try{
      const res = await axios.get("http://localhost:5000/favourite");
      setFavouriteItems(res.data);
    } catch (e){
      console.error(e);
    }
  };
  const addItemToCartList = async (obj) => {
    try {
      if (cartItems.find((e) => e.id_ === obj.id_)){
        removeItemFromCartList(obj.id_);
      }
      else{
        const {data} = await axios.post("http://localhost:5000/cart", obj);
        setCartItems([...cartItems, data]);
      }
    }
    catch (error){
      alert("Can't add items to favourite");
    }


  };
  const addItemsToFavourite = async (obj) => {
    try {
      if (favouriteItems.find((e) => e.id_ === obj.id_)){
        removeItemFromFavouriteList(obj.id_);
      }
      else{
        const {data} = await axios.post("http://localhost:5000/favourite", obj);
        setFavouriteItems([...favouriteItems, data]);
      }
    }
    catch (error){
      alert("Can't add items to favourite");
    }
  };
  const removeItemFromCartList = (id) => {
    const deleteItem = cartItems.find((item) => item.id_ === id);
    if (deleteItem) {
      axios.delete(`http://localhost:5000/cart/${deleteItem.id}`);
      setCartItems(cartItems.filter((item) => item.id_ !== deleteItem.id_));
    }
  };
  const removeItemFromFavouriteList = (id) => {
    const deleteItem = favouriteItems.find((item) => item.id_ === id);
    if (deleteItem) {
      axios.delete(`http://localhost:5000/favourite/${deleteItem.id}`);
      setFavouriteItems(favouriteItems.filter((item) => item.id_ !== deleteItem.id_));
    }
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
              cartItems={cartItems}
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
            />
        }/>
      </Routes>
    </div>
  );
}

export default App;
