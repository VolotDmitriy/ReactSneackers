import Icon from '../services/Icon';
import { Link } from 'react-router-dom';
import { useCart } from '../useCart';
import { SpaceNumberInsertion } from '../services/SpaceNumberInsertion';
import { priceCounter } from '../services/priceCounter';

const Header = (props) => {
  const { totalPrice } = useCart();
  return (
    <header>
      <div className="headerLogo">
        <Link to={'/'}></Link>
        <Icon name="logo" />
        <div className="headerLogo__info">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul>
        <li className="balance" onClick={props.onClickCartBasket}>
          <Icon name="cart" width={20} height={20} />
          <span>{SpaceNumberInsertion(totalPrice[0])} руб.</span>
        </li>

        <li className="Bootmark">
          <Link to={'/favourite'}></Link>
          <Icon name="heart" width={19} height={17} />
          <span>Закладки</span>
        </li>

        <li className="Profile">
          <Link to={'/orders'}></Link>
          <Icon name="user" width={18} height={18} />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
