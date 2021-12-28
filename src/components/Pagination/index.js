import { AiOutlineLeft, AiOutlineRight, useNavigate } from "libraries"
import "./pagination.scss";

const Pagination = ({total, limit, current}) => {
    const totalPage = Math.ceil(total / limit);
    const navigate = useNavigate();

    const handleNextPage = () => {
        if (current < totalPage) {
            const newPage = current + 1;
            navigate(`?page=${newPage}`);
        }
    };

    const handlePreviousPage = () => {
        if (current > 1) {
            const newPage = current - 1;
            navigate(`?page=${newPage}`);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center mt-24p mb-24p">
            <div className="simple-pagintaion">
                <h5 onClick={handlePreviousPage} className={(current === 1 ? 'color-grey' : 'cursor-pointer')}>
                    <AiOutlineLeft className="mr-4p" /> Previous Page
                </h5>
                <h5 onClick={handleNextPage} className={(current === totalPage ? 'color-grey' : 'cursor-pointer')}>
                    Next Page <AiOutlineRight className="ml-4p" />
                </h5>
            </div>
            <h6 className="color-grey font-400">{`${current} of ${totalPage}`}</h6>
        </div>
    );
};

export default Pagination;