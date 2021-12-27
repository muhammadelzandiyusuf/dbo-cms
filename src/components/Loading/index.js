import './loading.scss';

const Loading = () => {
    return (
        <div className="overlay d-flex justify-content-center align-items-center">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};
export default Loading;