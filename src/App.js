import CartList from "./Components/CartList";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import {useEffect, useState} from "react";




function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        fetch("https://66c63627134eb8f4349714df.mockapi.io/items")
            .then(
                (res) => {
                    return res.json();
                }
            )
            .then((json) => {
                setItems(json);
            })
    }, []);

    const clickPlus = (obj) =>{
        setCartItems(prev => [...prev, obj])
    }

    return (
      <div className="wrapper">

          {isOpened && <Drawer items={cartItems} onCloseBasket={() => setIsOpened(false)}/> }

          <Header onClickCartBasket={() => setIsOpened(true)}/>

          <div className="demarcation-line"><span></span></div>

          <div className="content">
              <div className="scroll-bar"></div>
              <h1>Все кроссовки</h1>

              <CartList arrOfItems={items} clickPlus={clickPlus}/>
          </div>
      </div>
  );
}

export default App;
