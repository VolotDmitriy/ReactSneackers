import CartList from "./Components/CartList";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

function App() {
  return (
      <div className="wrapper">

          <Drawer/>

          <Header/>

          <div className="demarcation-line"><span></span></div>

          <div className="content">
              <div className="scroll-bar"></div>
              <h1>Все кроссовки</h1>

              <CartList/>
          </div>
      </div>
  );
}

export default App;
