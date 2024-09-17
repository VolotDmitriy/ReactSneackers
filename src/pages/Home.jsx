import Icon from '../services/Icon';
import CartList from '../Components/CartList';
import { useState } from 'react';
import { displayableItems } from '../services/displayableItems';

const Home = ({
  items,
  addItemToCartList,
  addItemsToFavourite,
  removeItemFromFavouriteList,
}) => {
  const [search, setSearch] = useState('');

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

      <CartList
        arrOfItems={displayableItems(items, search)}
        clickToAdd={addItemToCartList}
        clickToFavourite={addItemsToFavourite}
        removeItemFromFavouriteList={removeItemFromFavouriteList}
        favStatus={false}
      />
    </div>
  );
};

export default Home;
