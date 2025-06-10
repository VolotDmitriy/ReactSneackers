import Icon from '../services/Icon';
import CartList from '../Components/CartList';
import { useContext, useState } from 'react';
import { displayableItems } from '../services/displayableItems';
import AppContext from '../context';

const Home = ({}) => {
  const [search, setSearch] = useState('');
  const { items } = useContext(AppContext);

  return (
    <div className="content">
      <div className="scroll-bar"></div>

      <div className="content-search">
        <h1>{search ? `Поиск по запросу: ${search}` : 'Все кроссовки'}</h1>
        <div className="searchPlace">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Icon className="searchIcon" name={'search'} />
        </div>
      </div>

      <CartList arrOfItems={displayableItems(items, search)} />
    </div>
  );
};

export default Home;
