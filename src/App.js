import CartList from "./Components/CartList";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import {useEffect, useState} from "react";
import Icon from "./services/Icon";
import axios from "axios";
import {priceCounter} from "./services/priceCounter";
import {SpaceNumberInsertion} from "./services/SpaceNumberInsertion";



function App() {


    const [isOpened, setIsOpened] = useState(false);  // MARK FOR OPEN STATUS OF MODAL (CART LIST)

    const [items, setItems] = useState([]);             // MAIN ITEMS LIST
    const [cartItems, setCartItems] = useState([]);     // ITEMS WHICH WAS ADDED TO SHOP CART

    const [search, setSearch] = useState("");


    useEffect(() => {
        fetch("https://66c63627134eb8f4349714df.mockapi.io/items")
            .then((res) => {
                    return res.json();
                })
            .then((json) => {
                setItems(json);
            })
        updateCartItems();
    }, []);

    useEffect( () => {
        isOpened && updateCartItems();
    }, [isOpened])

    


    const displayableItems = (items, filterValue) => {
        return items.filter(items => items.title.toLowerCase().includes(filterValue))
    }

    const updateCartItems = () => {
        axios.get ("https://66c63627134eb8f4349714df.mockapi.io/cart")
            .then((res) => setCartItems(res.data))
    }

    const addItemToCartList = (obj) =>{
        axios.post("https://66c63627134eb8f4349714df.mockapi.io/cart", obj);
        setCartItems([...cartItems, obj]);
    }

    const removeItemFromCartList = (id) => {
        const deleteItem = cartItems.find (item => item.id_ === id);
        if (deleteItem){
            axios.delete(`https://66c63627134eb8f4349714df.mockapi.io/cart/${deleteItem.id}`)
            setCartItems(cartItems.filter(item => item.id_ !== deleteItem.id_));
        }
    }


    return (
      <div className="wrapper">

          {isOpened && <Drawer items={cartItems} onRemove = {removeItemFromCartList} onCloseBasket = {() => setIsOpened(false)}/> }
          <Header onClickCartBasket = {() => setIsOpened(true)} totalPrice = {SpaceNumberInsertion(priceCounter(cartItems)[0])}/>

          <div className="demarcation-line"><span></span></div>

          <div className="content">

              <div className="scroll-bar"></div>

              <div className="content-search">
                  <h1>{search ? `Поиск по запросу: ${search}` : "Все кроссовки"}</h1>
                  <div className="searchPlace">
                      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                      <Icon className = "searchIcon" name = {"search"}/>
                  </div>
              </div>

              <CartList arrOfItems = {displayableItems(items, search)} clickPlus = {addItemToCartList}/>
          </div>
      </div>
    );
}

export default App;
