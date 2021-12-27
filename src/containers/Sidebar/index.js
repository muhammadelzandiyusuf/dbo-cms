import { Fragment, Link, LogoDBOImage, AiOutlineHome, AiOutlineTeam, AiTwotoneCalendar } from "libraries";

const { showMenu } = false;

const Sidebar = () => {
    return (
        <Fragment>
            {showMenu &&
                <div className="overlay" />}
                <div className={`sidebar-container ${showMenu ? 'show' : ''}`}>
                <div className="logo mb-16p">
                    <img src={LogoDBOImage} alt={'logoDBO'} />
                </div>
                <div className="sidebar-menu">
                    <Link to="/"><AiOutlineHome className="icon" /> Beranda</Link>
                    <Link to="/" className="active"><AiOutlineTeam className="icon" /> Driver Management</Link>
                    <Link to="/"><AiTwotoneCalendar className="icon" /> Pickup</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;