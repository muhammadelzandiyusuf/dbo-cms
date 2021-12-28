import { Fragment, AiOutlineSearch, AiOutlinePlus, useEffect, useSelector, useState, useDispatch, useNavigate,
    Helmet, lazy
} from "libraries";
import { getSuppliers, postSupplier, updateSupplier, deleteSupplier } from "services";
import { supplierSelector, searchSupplier } from "modules";
import { getIdentityFromHref } from "utils";
import {notify} from "react-notify-toast";
import supplierHeader from 'assets/dummy/supplierHeader.json';

const PageHeader = lazy(() => import('components/PageHeader'));
const CustomButton = lazy(() => import('components/Button'));
const Textfield = lazy(() => import('components/Textfield'));
const Loading = lazy(() => import('components/Loading'));
const TableCustom = lazy(() => import('pages/supplier/TableCustom'));
const FormAdd = lazy(() => import('pages/supplier/FormAdd'));
const FormDelete = lazy(() => import('components/FormDelete'));
const FormEdit = lazy(() => import('pages/supplier/FormEdit'));

const Supplier = () => {

    const dispatch = useDispatch();
    const suppliers = useSelector(supplierSelector);
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ supplierDetail, setSupplierDetail ] = useState([]);
    const [ isDeleteShow, setIsDeleteShow ] = useState(false);
    const [ isAddForm, setIsAddForm ] = useState(false);
    const [ isEditForm, setIsEditForm ] = useState(false);

    useEffect(() => {
        const getSupplier = async () => {
            await getSuppliers({url: '/dummy/supplier.json'});
            setIsLoading(false);
        };

        getSupplier();
    }, []);

    const onChangeSearch = (value) => {
        dispatch(searchSupplier(value));
        navigate('/supplier');
    };

    const handleShowDeleteSupplier = (id) => {
        const detail = suppliers.find(supplier => getIdentityFromHref(supplier.href) === id);
        if (detail) {
            setSupplierDetail(detail);
        }
        setIsDeleteShow(true);
    }

    const handleDeleteSupplier = (id) => {
        const payload = { url: '/dummy/supplier.json', body: { id: id }};
        deleteSupplier(payload).then(response => {
            setIsDeleteShow(false);
            notify.show(`Data supplier berhasil dihapus`, 'success');
        })
    }

    const handlePostSupplier = (data) => {
        const payload = {
            url: '/dummy/supplier.json',
            body: {
                name: data.name,
                code: data.code,
            }
        }
        postSupplier(payload).then(response => {
            setIsAddForm(false);
            notify.show(`Data supplier berhasil tersimpan`, 'success');
        })
    }

    const handleShowFormEdit = (id) => {
        const detail = suppliers.find(customer => getIdentityFromHref(customer.href) === id);
        if (detail) {
            setSupplierDetail(detail);
        }
        setIsEditForm(true);
    }

    const handleUpdateSupplier = (data) => {
        const payload = {
            url: '/dummy/supplier.json',
            body: {
                name: data.name,
                code: data.code,
            }
        }
        updateSupplier(payload).then(response => {
            setIsEditForm(false);
            notify.show(`Data supplier berhasil diupdate`, 'success');
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>DBO CMS - Supplier</title>
            </Helmet>
            <div className="driver-container">
                <PageHeader title="Supplier Management" desc="Data supplier Depoguna Bangunan Online">
                    <Textfield
                        onChange={(e) => onChangeSearch(e.target.value)}
                        placeholder="Cari Supplier"
                        icon={<AiOutlineSearch className="icon font-18 color-primary" />}
                    />
                    <CustomButton type="primary" onClick={() => setIsAddForm(true)}>
                        <span className="text-uppercase">Tambah Supplier</span>
                        <AiOutlinePlus className="font-18 ml-8p" />
                    </CustomButton>
                </PageHeader>
                {isLoading &&
                    <Loading />}
                {!isLoading && suppliers ? (
                    <div className={'ml-24p mr-24p'}>
                        <TableCustom
                            headers={supplierHeader}
                            bodies={suppliers}
                            handleShowDelete={handleShowDeleteSupplier}
                            handleShowFormEdit={handleShowFormEdit}
                        />
                    </div>
                ):(
                    <div className="alert ml-24p mr-24p">
                        <h5 className="color-grey font-500">Data yang anda cari tidak ditemukan</h5>
                    </div>
                )}
                <FormDelete
                    show={isDeleteShow}
                    onHide={() => setIsDeleteShow(false)}
                    name={supplierDetail?.name}
                    handleDelete={handleDeleteSupplier}
                    message={'Apakah kamu yakin akan menghapus data supplier'}
                />
                <FormAdd
                    show={isAddForm}
                    onHide={() => setIsAddForm(false)}
                    onSubmit={handlePostSupplier}
                />
                <FormEdit
                    show={isEditForm}
                    onHide={() => setIsEditForm(false)}
                    onSubmit={handleUpdateSupplier}
                    supplierDetail={supplierDetail}
                />
            </div>
        </Fragment>
    )
}

export default Supplier