import { Fragment, LogoDBOImage, AiOutlineTeam, AiOutlineShoppingCart, GiFactory, useLocation, useSelector,
    useDispatch, useNavigate
} from "libraries";
import { menuSelector, toggleMenu } from "modules";

const Sidebar = () => {

    const location = useLocation();
    const pathName = location.pathname.split('/');
    const showMenu = useSelector(menuSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeModal = () => {
        dispatch(toggleMenu(false));
    };

    const handleToLink = (link) => {
        closeModal();
        navigate(link)
    };

    return (
        <Fragment>
            {showMenu &&
                <div className="overlay" onClick={closeModal} />}
                <div className={`sidebar-container ${showMenu ? 'show' : ''}`}>
                <div className="logo mb-16p">
                    <img src={LogoDBOImage} alt={'logoDBO'} />
                </div>
                <div className="sidebar-menu">
                    <div className={`${pathName[1] === 'customer' ? 'active' : ''}`}
                       onClick={() => handleToLink('/customer')}
                    >
                        <AiOutlineTeam className="icon" /> Customer
                    </div>
                    <div className={`${pathName[1] === 'supplier' ? 'active' : ''}`}
                       onClick={() => handleToLink('/supplier')}
                    >
                        <GiFactory className="icon" /> Supplier
                    </div>
                    <div className={`${pathName[1] === 'order' ? 'active' : ''}`}
                       onClick={() => handleToLink('/order')}
                    >
                        <AiOutlineShoppingCart className="icon" /> Order
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;