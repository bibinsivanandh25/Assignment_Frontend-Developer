import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              className="nav-link"
              to="/products"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
