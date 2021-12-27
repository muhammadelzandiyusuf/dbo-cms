import { AiOutlineMenu, LogoDBOImage, userImage } from "libraries";

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="mobile-menu">
                <AiOutlineMenu className="font-24 mr-16p" />
                <img src={LogoDBOImage} alt={'logoDBO'} className="menu-logo" />
            </div>
            <h5 className="username font-12 font-600 mr-8p">Hello, <span className="color-primary">DBO User</span></h5>
            <img src={userImage} alt={'userImage'} className="avatar" />
        </div>
    );
};

export default Navbar;