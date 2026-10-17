import logoImage from "../../assets/monox studios.png";

const Navbar = ({ search, onSearchChange, cartCount, onCartClick }) => {
  return (
    <header className="site-header" id="top">
      <a className="brand-wrap" href="#top" aria-label="Monox Gadgets home">
        <img className="brand-logo" src={logoImage} alt="Monox Studio" />
        <span>Monox Gadgets</span>
      </a>
      <label className="search-wrap">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          placeholder="Find your next favorite..."
          aria-label="Search gadgets"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
      <nav className="nav-actions" aria-label="Store navigation">
        <a href="#shop">Shop</a>
        <a href="#newsletter">Our notes</a>
        <button type="button" className="cart-button" onClick={onCartClick}>
          <span aria-hidden="true">▱</span> Bag{" "}
          <span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
