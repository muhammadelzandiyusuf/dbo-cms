import { Fragment, AiOutlineSearch, AiOutlinePlus, useEffect, useSelector, useState } from "libraries";
import { getCustomers } from "services";
import { customerSelector } from "modules";
import customerHeader from 'assets/dummy/customerHeader.json';

import PageHeader from 'components/PageHeader';
import CustomButton from 'components/Button';
import Textfield from 'components/Textfield';
import Loading from 'components/Loading';
import TableCustom from 'components/TableCustom';

const Customer = () => {

    const customers = useSelector(customerSelector);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const getCustomer = async () => {
            await getCustomers({url: '/dummy/customer.json'});
            setIsLoading(false);
        };

        getCustomer();
    }, []);

    return (
        <Fragment>
            <div className="driver-container">
                <PageHeader title="Customer Management" desc="Data customer Depoguna Bangunan Online">
                    <Textfield
                        placeholder="Cari Customer"
                        icon={<AiOutlineSearch className="icon font-18 color-primary" />}
                    />
                    <CustomButton type="primary">
                        <span className="text-uppercase">Tambah Customer</span>
                        <AiOutlinePlus className="font-18 ml-8p" />
                    </CustomButton>
                </PageHeader>
                {isLoading &&
                <Loading />}
                {!isLoading && customers ? (
                    <div className={'ml-24p mr-24p'}>
                        <TableCustom headers={customerHeader} bodies={customers} />
                    </div>
                ):(
                    <div className="alert ml-24p mr-24p">
                        <h5 className="color-grey font-500">Data yang anda cari tidak ditemukan</h5>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Customer