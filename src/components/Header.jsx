import { Link } from "react-router-dom";


const Header = () => {
    return (
      <nav className="nav-bar">
        <Link to='/' style={{textDecoration:"none", color: "#efefef"}}>XYZ ENGINE</Link>
      </nav>
    );
};

export default Header;