import { Fragment, AiOutlineSearch, AiOutlinePlus, useEffect, useSelector, useState, useDispatch, useNavigate,
    Helmet, lazy
} from "libraries";
import { getCustomers, deleteCustomer, postCustomer, updateCustomer } from "services";
import { customerSelector, searchCustomer } from "modules";
import { getIdentityFromHref } from "utils";
import {notify} from "react-notify-toast";
import customerHeader from 'assets/dummy/customerHeader.json';

const PageHeader = lazy(() => import('components/PageHeader'));
const CustomButton = lazy(() => import('components/Button'));
const Textfield = lazy(() => import('components/Textfield'));
const Loading = lazy(() => import('components/Loading'));
const TableCustom = lazy(() => import('pages/customer/TableCustom'));
const DetailCustomer = lazy(() => import('pages/customer/DetailCustomer'));
const FormAdd = lazy(() => import('pages/customer/FormAdd'));
const FormDelete = lazy(() => import('components/FormDelete'));
const FormEdit = lazy(() => import('pages/customer/FormEdit'));

const Customer = () => {

    const dispatch = useDispatch();
    const customers = useSelector(customerSelector);
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isDetailShow, setIsDetailShow ] = useState(false);
    const [ customerDetail, setCustomerDetail ] = useState([]);
    const [ isDeleteShow, setIsDeleteShow ] = useState(false);
    const [ isAddForm, setIsAddForm ] = useState(false);
    const [ isEditForm, setIsEditForm ] = useState(false);

    useEffect(() => {
        const getCustomer = async () => {
            await getCustomers({url: '/dummy/customer.json'});
            setIsLoading(false);
        };

        getCustomer();
    }, []);

    const onChangeSearch = (value) => {
        dispatch(searchCustomer(value));
        navigate('/customer');
    };

    const handleDetailCustomer = (id) => {
        const detail = customers.find(customer => getIdentityFromHref(customer.href) === id);
        if (detail) {
            setCustomerDetail(detail);
        }
        setIsDetailShow(true);
    }

    const handleShowDeleteCustomer = (id) => {
        const detail = customers.find(customer => getIdentityFromHref(customer.href) === id);
        if (detail) {
            setCustomerDetail(detail);
        }
        setIsDeleteShow(true);
    }

    const handleDeleteCustomer = (id) => {
        const payload = { url: '/dummy/customer.json', body: { id: id }};
        deleteCustomer(payload).then(response => {
            setIsDeleteShow(false);
            notify.show(`Data customer berhasil dihapus`, 'success');
        })
    }

    const handlePostCustomer = (data) => {
        const payload = {
            url: '/dummy/customer.json',
            body: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber
            }
        }
        postCustomer(payload).then(response => {
            setIsAddForm(false);
            notify.show(`Data customer berhasil tersimpan`, 'success');
        })
    }

    const handleShowFormEdit = (id) => {
        const detail = customers.find(customer => getIdentityFromHref(customer.href) === id);
        if (detail) {
            setCustomerDetail(detail);
        }
        setIsEditForm(true);
    }

    const handleUpdateCustomer = (data) => {
        const payload = {
            url: '/dummy/customer.json',
            body: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber
            }
        }
        updateCustomer(payload).then(response => {
            setIsEditForm(false);
            notify.show(`Data customer berhasil diupdate`, 'success');
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>DBO CMS - Customer</title>
            </Helmet>
            <div className="driver-container">
                <PageHeader title="Customer Management" desc="Data customer Depoguna Bangunan Online">
                    <Textfield
                        onChange={(e) => onChangeSearch(e.target.value)}
                        placeholder="Cari Customer"
                        icon={<AiOutlineSearch className="icon font-18 color-primary" />}
                    />
                    <CustomButton type="primary" onClick={() => setIsAddForm(true)}>
                        <span className="text-uppercase">Tambah Customer</span>
                        <AiOutlinePlus className="font-18 ml-8p" />
                    </CustomButton>
                </PageHeader>
                {isLoading &&
                <Loading />}
                {!isLoading && customers ? (
                    <div className={'ml-24p mr-24p'}>
                        <TableCustom
                            headers={customerHeader}
                            bodies={customers}
                            handleDetailCustomer={handleDetailCustomer}
                            handleShowDeleteCustomer={handleShowDeleteCustomer}
                            handleShowFormEdit={handleShowFormEdit}
                        />
                    </div>
                ):(
                    <div className="alert ml-24p mr-24p">
                        <h5 className="color-grey font-500">Data yang anda cari tidak ditemukan</h5>
                    </div>
                )}
                <DetailCustomer
                    show={isDetailShow}
                    onHide={() => setIsDetailShow(false)}
                    customerDetail={customerDetail}
                />
                <FormDelete
                    show={isDeleteShow}
                    onHide={() => setIsDeleteShow(false)}
                    name={customerDetail?.firstName}
                    handleDelete={handleDeleteCustomer}
                    message={'Apakah kamu yakin akan menghapus data customer'}
                />
                <FormAdd
                    show={isAddForm}
                    onHide={() => setIsAddForm(false)}
                    onSubmit={handlePostCustomer}
                />
                <FormEdit
                    show={isEditForm}
                    onHide={() => setIsEditForm(false)}
                    onSubmit={handleUpdateCustomer}
                    customerDetail={customerDetail}
                />
            </div>
        </Fragment>
    )
}

export default Customer