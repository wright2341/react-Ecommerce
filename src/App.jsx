import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import heroImage from "./assets/iphone18.png";
import image1 from "./assets/127789708173005705.jpg";
import image2 from "./assets/320951910963703838.jpg";
import image3 from "./assets/341921796729782670.jpg";
import image4 from "./assets/61924563619034266.jpg";
import applePhone from "./assets/Apple iPhone 17, 256GB - Black (1).jpg";
import pixelPhone from "./assets/Google Pixel 9 Pro Features Improved Cameras and a___.jpg";
import pixelPhonePro from "./assets/Google pixel 9 pro xl buy now click on the below link to buy.jpg";
import heroProduct from "./assets/hero.png";
import iphoneProMax from "./assets/iPhone 17 Pro Max em 2025 _ Iphone, Listas de….jpg";
import monoxLogo from "./assets/monox studios.png";
import image12 from "./assets/Ungültiger Artikel.jpg";

const categories = ["All", "Phones", "Accessories"];

const products = [
  {
    id: 1,
    image: image1,
    name: "iphone 17 air",
    category: "phones",
    price: 49,
    alt: "Gadget product",
  },
  {
    id: 2,
    image: image2,
    name: "samsung galaxy s23",
    category: "phones",
    price: 69,
    alt: "Gadget product",
  },
  {
    id: 3,
    image: image3,
    name: "samsung flip 5",
    category: "phones",
    price: 89,
    alt: "Gadget product",
  },
  {
    id: 4,
    image: image4,
    name: "beatsheadphones",
    category: "Accessories",
    price: 99,
    alt: "Gadget product",
  },
  {
    id: 5,
    image: applePhone,
    name: "iPhone 17",
    category: "Phones",
    price: 799,
    alt: "Apple iPhone 17",
  },
  {
    id: 6,
    image: pixelPhone,
    name: "Google Pixel",
    category: "Phones",
    price: 699,
    alt: "Google Pixel phone",
  },
  {
    id: 7,
    image: pixelPhonePro,
    name: "Google Pixel Pro XL",
    category: "Phones",
    price: 899,
    alt: "Google Pixel Pro XL",
  },
  
  {
    id: 9,
    image: iphoneProMax,
    name: "iPhone 17Pro Max",
    category: "Phones",
    price: 999,
    alt: "iPhone Pro Max",
  },

  {
    id: 11,
    image: image12,
    name: "samsung galaxy s26 ultra",
    category: "Phones",
    price: 59,
    alt: "Gadget product",
  },
];

const perks = [
  { title: "Free shipping", text: "On orders over $100" },
  { title: "Easy returns", text: "30 days to decide" },
  { title: "Secure payment", text: "Safe checkout" },
  { title: "Need help?", text: "We are here for you" },
];

const money = (amount) => `$${amount.toLocaleString("en-US")}`;

const App = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function addToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function selectCategory(category) {
    setActiveCategory(category);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="page-shell">
      <div className="announcement-bar">Free shipping on orders over $100</div>
      <Navbar
        search={search}
        onSearchChange={setSearch}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main className="page-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">
              Gadgets for home, work, and everywhere
            </span>
            <h1 id="hero-title">
              Shop the latest
              <br />
              <span>gadgets.</span>
            </h1>
            <p>Browse phones and everyday tech accessories at great prices.</p>

            <div className="hero-actions">
              <a className="primary-btn" href="#shop">
                Browse products
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img src={heroImage} alt="Featured smartphone" />
          </div>
        </section>

        <section className="category-strip" aria-label="Shop by category">
          <div className="category-intro">
            <span>Browse categories</span>
          </div>
          {categories.slice(1).map((category, index) => (
            <button
              className={`category-card category-${index + 1}`}
              key={category}
              onClick={() => selectCategory(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </section>

        <section className="products-section" id="shop">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Our collection</span>
              <h2>Shop gadgets</h2>
            </div>
            <p>Find something useful for your everyday.</p>
          </div>

          <div className="shop-toolbar">
            <div className="filter-tabs" aria-label="Filter products">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "filter-tab active"
                      : "filter-tab"
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="result-count">
              {visibleProducts.length} products
            </span>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </div>
                  <div className="product-details">
                    <div className="product-title-row">
                      <div>
                        <span className="product-category">
                          {product.category}
                        </span>
                        <h3>{product.name}</h3>
                      </div>
                      <span className="product-price">
                        {money(product.price)}
                      </span>
                    </div>
                    <button
                      className="add-button"
                      type="button"
                      onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <span aria-hidden="true">⌕</span>
              <h3>No products found</h3>
              <p>Try another search or select a different category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Show all gadgets
              </button>
            </div>
          )}
        </section>

        <section className="benefits-section" aria-label="Store services">
          {perks.map((item) => (
            <div className="perk-box" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </section>

        <section className="newsletter-section" id="newsletter">
          <div>
            <span className="section-kicker">Get store updates</span>
            <h2>
              New products and offers
              <br />
              <em>by email.</em>
            </h2>
          </div>
          {subscribed ? (
            <p className="subscribe-success">Thanks for subscribing.</p>
          ) : (
            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubscribed(true);
              }}
            >
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                required
              />
              <button type="submit">Subscribe</button>
              <small>We will only send occasional store updates.</small>
            </form>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Monox Gadgets home">
          <img className="brand-logo" src={monoxLogo} alt="" />
          <span>Monox Gadgets</span>
        </a>
        <span>Phones and accessories for everyday use.</span>
        <span>© 2026 Monox Gadgets</span>
      </footer>

      {cartOpen && (
        <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
          <aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-heading"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-heading">
              <div>
                <span className="section-kicker">Shopping cart</span>
                <h2 id="cart-heading">
                  Cart <span>({cartCount})</span>
                </h2>
              </div>
              <button
                type="button"
                className="close-cart"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>
            {cart.length ? (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.alt} />
                      <div className="cart-item-info">
                        <span>{item.category}</span>
                        <strong>{item.name}</strong>
                        <b>{money(item.price)}</b>
                        <div className="quantity-control">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Remove one ${item.name}`}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Add one ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>{money(cartTotal)}</strong>
                  </div>
                  <small>Shipping and taxes calculated at checkout.</small>
                  <button type="button" onClick={() => setCartOpen(false)}>
                    Continue to checkout <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <span aria-hidden="true">✳</span>
                <h3>Your cart is empty</h3>
                <p>Add products to your cart to see them here.</p>
                <button type="button" onClick={() => setCartOpen(false)}>
                  Continue shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
};

export default App;
