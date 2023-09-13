import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

import './navbar.css'
import Logo from '../../public/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to='/'>
		<img src={Logo} alt='logo' />
        </Link>
		</div>
      <SearchBox />
      <div className="signin">
        <p>Sign in</p>
      </div>
    </nav>
  );
};

export default Navbar;
