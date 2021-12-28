import { AiOutlineMenu, LogoDBOImage, userImage, useDispatch, useEffect, useState } from "libraries";
import { useCookies } from 'react-cookie';
import { toggleMenu } from "modules";

const Navbar = () => {

    const dispatch = useDispatch();
    const [ cookies ] = useCookies(['dbo']);
    const [ username, setUsername ] = useState('');

    const openModal = () => {
        dispatch(toggleMenu(true));
    };

    useEffect(() => {
        setUsername(cookies.dbo);
    }, [cookies])

    return (
        <div className="navbar-container">
            <div className="mobile-menu">
                <AiOutlineMenu className="font-24 mr-16p" onClick={openModal} />
                <img src={LogoDBOImage} alt={'logoDBO'} className="menu-logo" />
            </div>
            {cookies.dbo &&
                <h5 className="username font-12 font-600 mr-8p">Hello, <span className="color-primary">{username}</span></h5>
            }
            <img src={userImage} alt={'userImage'} className="avatar" />
        </div>
    );
};

export default Navbar;