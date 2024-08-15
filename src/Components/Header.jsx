import Icon from "../services/Icons/Icon";


const Header = () =>{
    return (
        <header>
            <div className="headerLogo">
                <Icon name="logo"/>
                <div className="headerLogo__info">
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>

            </div>
            <ul>
                <li className="balance">
                    <Icon name="cart" width={20} height={20}/>
                    <span>1205 руб.</span>
                </li>
                <li className="Bootmark">
                    <Icon name="heart" width={19} height={17}/>
                    <span>Закладки</span>
                </li>
                <li className="Profile">
                    <Icon name="user" width={18} height={18}/>
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
}

export default Header;