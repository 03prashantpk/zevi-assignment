import "./Navbar.scss";
import Logo from '/logo.png';

const Navbar = () => {
    return (
        <nav className="Navbar">
           <img src={Logo} alt="" />
        </nav>
    );
}

export default Navbar;