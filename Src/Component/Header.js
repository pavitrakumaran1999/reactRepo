import { LOGO_URL } from "../../Utils/constants";

const Header= () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" alt ="Logo" src={LOGO_URL} />
        </div>
        <div className="navigator">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>cart</li>
            </ul>
        </div>
        </div>
    );
};

export default Header;