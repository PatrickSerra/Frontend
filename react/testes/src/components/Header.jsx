function Header() {
  return (
    <header className="header">
      <div className="logo-img">
         <img src="/src/img/react.png" alt="" />
      </div>
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
