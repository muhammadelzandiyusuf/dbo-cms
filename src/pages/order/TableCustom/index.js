import { useLocation, BiDetail } from 'libraries';
import { getSliceData, getIdentityFromHref, convertDate } from "utils";
import NumberFormat from 'react-number-format';
import 'assets/scss/tableCustom.scss';

import Pagination from 'components/Pagination';

const TableCustom = ({headers, bodies, handleDetail}) => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const limit = 5;
    const getSlice = getSliceData(params, limit);

    return (
        <div className={'table'}>
            <div className={'desktop-view'}>
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header.name}</th>
                            ))}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bodies.slice(getSlice.from, getSlice.to).map((body, index) => {
                        const identity = getIdentityFromHref(body.href);
                        return (
                            <tr key={index}>
                                <td>{body.orderNumber}</td>
                                <td>{body.user.firstName} {body.user.lastName}</td>
                                <td>{body.payment.paymentMethod.name}</td>
                                <td>{convertDate(body.created)}</td>
                                <td>
                                    <NumberFormat value={body.productHighlight.grandTotal} displayType={'text'}
                                                  thousandSeparator={true} prefix={'Rp. '} decimalScale={0} />
                                </td>
                                <td>
                                    <span
                                        onClick={() => handleDetail(identity)}
                                        className={'mr-16p cursor-pointer'}
                                    >
                                        <BiDetail className={'icon'} /> Detail
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className={'mobile-view'}>
                <div className={'table-box'}>
                    {headers.map((header, index) => (
                        <h5 className={'table-label'} key={index}>{header.name}</h5>
                    ))}
                    <h5 className={'table-label'}>Action</h5>
                </div>
                {bodies.slice(getSlice.from, getSlice.to).map((body, index) => {
                    const identity = getIdentityFromHref(body.href);
                    return (
                        <div className={'table-box mt-16p'} key={index}>
                            <div className={'table-label'}>{body.orderNumber}</div>
                            <div className={'table-label'}>{body.user.firstName} {body.user.lastName}</div>
                            <div className={'table-label'}>{body.payment.paymentMethod.name}</div>
                            <div className={'table-label'}>{convertDate(body.created)}</div>
                            <div className={'table-label'}>
                                <NumberFormat value={body.productHighlight.grandTotal} displayType={'text'}
                                              thousandSeparator={true} prefix={'Rp. '} decimalScale={0} />
                            </div>
                            <div className={'table-label'}>
                                <span
                                    onClick={() => handleDetail(identity)}
                                    className={'mr-16p cursor-pointer'}
                                >
                                        <BiDetail className={'icon'} /> Detail
                                    </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            {bodies.length === 0 &&
                <div className="alert">
                    <h5 className="color-grey font-500">Data yang anda cari tidak ditemukan</h5>
                </div>
            }
            <Pagination total={bodies.length} limit={limit} current={getSlice.page} />
        </div>
    )
}

export default TableCustom