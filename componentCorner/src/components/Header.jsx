import './Header.css';

function Header(props) {
  return (
    <header className="app-header">
        <h1 className="title">{props.store}</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <div className="cart-container"> 
          <span className="cart-icon">🛒</span> 
          <span className="cart-count">{props.cartCount}</span>
        </div>
    </header>
  );
}

export default Header;