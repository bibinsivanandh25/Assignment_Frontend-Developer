import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="/public/logo.png" alt="logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
