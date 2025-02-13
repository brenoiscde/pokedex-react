import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <img className="icon-pokeball" src="/src/assets/pokeball.svg" alt="logo-pokeball" />
                <img className="icon-logo" src="/src/assets/Pokédex.svg" alt="logo" />
            </div>
            <div className="header__search">
                <div className="container__search">
                    <img className="icon-search" src="/src/assets/Vector.svg" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </header>
    );
}

export default Header;