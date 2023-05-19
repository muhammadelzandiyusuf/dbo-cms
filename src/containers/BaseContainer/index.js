import { Fragment, Suspense, Notifications } from "libraries";

import Loading from 'components/Loading';
import Sidebar from "containers/Sidebar";
import Navbar from "containers/Navbar";

import './baseContainer.scss';

const BaseContainer = (props) => {
    return (
        <Fragment>
            <Suspense fallback={
                <Loading />
            }>
                <div className="main-container">
                    <Notifications />
                    <Sidebar />
                    <div className="main-layout">
                        <Navbar />
                        <div className="main-content">
                            {props.children}
                        </div>
                    </div>
                </div>
            </Suspense>
        </Fragment>
    );
};

export default BaseContainer