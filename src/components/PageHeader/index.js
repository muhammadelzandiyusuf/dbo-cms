import './pageHeader.scss';

const Pageheader = ({title, desc, children}) => {
    return (
        <div className="pageheader">
            <div className="pageheader-title">
                <h1 className="font-26 font-700 color-primary text-uppercase">{title}</h1>
                <h5 className="font-400">{desc}</h5>
            </div>
            <div className="pageheader-children">
                {children}
            </div>
        </div>
    );
};

export default Pageheader;