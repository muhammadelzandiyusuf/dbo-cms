import { Fragment, AiOutlineSearch, useEffect, useSelector, useState, useDispatch, useNavigate,
    Helmet, lazy
} from "libraries";
import { orderSelector, searchOrder } from "modules";
import { getOrders } from "services";
import orderHeader from 'assets/dummy/orderHeader.json';

const PageHeader = lazy(() => import('components/PageHeader'));
const Textfield = lazy(() => import('components/Textfield'));
const Loading = lazy(() => import('components/Loading'));
const TableCustom = lazy(() => import('pages/order/TableCustom'));
const DetailOrder = lazy(() => import('pages/order/DetailOrder'));

const Order = () => {

    const dispatch = useDispatch();
    const orders = useSelector(orderSelector);
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isDetail, setIsDetail ] = useState(false);
    const [ details, setDetails ] = useState([]);

    useEffect(() => {
        const getOrder = async () => {
            await getOrders({url: '/dummy/order.json'});
            setIsLoading(false);
        };

        getOrder();
    }, []);

    const onChangeSearch = (value) => {
        dispatch(searchOrder(value));
        navigate('/order');
    };

    const handleDetail = (id) => {
        const detail = orders.find(order => order.orderNumber === id);
        if (detail) {
            setDetails(detail);
        }
        setIsDetail(true);
    }

    return (
        <Fragment>
            <Helmet>
                <title>DBO CMS - Order</title>
            </Helmet>
            <div className="driver-container">
                <PageHeader title="Order Management" desc="Data order Depoguna Bangunan Online">
                    <Textfield
                        onChange={(e) => onChangeSearch(e.target.value)}
                        placeholder="Cari Order"
                        icon={<AiOutlineSearch className="icon font-18 color-primary" />}
                    />
                </PageHeader>
                {isLoading &&
                    <Loading />}
                {!isLoading && orders ? (
                    <div className={'ml-24p mr-24p'}>
                        <TableCustom
                            headers={orderHeader}
                            bodies={orders}
                            handleDetail={handleDetail}
                        />
                    </div>
                ):(
                    <div className="alert ml-24p mr-24p">
                        <h5 className="color-grey font-500">Data yang anda cari tidak ditemukan</h5>
                    </div>
                )}
                <DetailOrder
                    show={isDetail}
                    onHide={() => setIsDetail(false)}
                    details={details}
                />
            </div>
        </Fragment>
    )
}

export default Order