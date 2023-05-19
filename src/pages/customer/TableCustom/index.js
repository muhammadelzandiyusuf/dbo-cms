import { useLocation, BiDetail, AiOutlineEdit, BsTrash } from 'libraries';
import { convertDate, getSliceData, getIdentityFromHref } from "utils";
import 'assets/scss/tableCustom.scss';

import Pagination from 'components/Pagination';

const TableCustom = ({headers, bodies, handleDetailCustomer, handleShowDeleteCustomer, handleShowFormEdit}) => {

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
                                <td>{body.firstName} {body.lastName}</td>
                                <td>{body.email}</td>
                                <td>{body.phoneNumber}</td>
                                <td>{convertDate(body.dateJoined)}</td>
                                <td>
                                    <span
                                        onClick={() => handleDetailCustomer(identity)}
                                        className={'mr-16p cursor-pointer'}
                                    >
                                        <BiDetail className={'icon'} /> Detail
                                    </span>
                                    <span
                                        onClick={() => handleShowFormEdit(identity)}
                                        className={'mr-16p cursor-pointer'}>
                                        <AiOutlineEdit className={'icon'} /> Edit
                                    </span>
                                    <span
                                        onClick={() => handleShowDeleteCustomer(identity)}
                                        className={'cursor-pointer'}
                                    >
                                        <BsTrash className={'icon'} /> Delete
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
                            <div className={'table-label'}>{body.firstName} {body.lastName}</div>
                            <div className={'table-label'}>{body.email}</div>
                            <div className={'table-label'}>{body.phoneNumber}</div>
                            <div className={'table-label'}>{convertDate(body.dateJoined)}</div>
                            <div className={'table-label'}>
                                <span
                                    onClick={() => handleDetailCustomer(identity)}
                                    className={'mr-16p cursor-pointer'}
                                >
                                    <BiDetail className={'icon'} /> Detail
                                </span>
                                <span
                                    onClick={() => handleShowFormEdit(identity)}
                                    className={'mr-16p cursor-pointer'}>
                                        <AiOutlineEdit className={'icon'} /> Edit
                                    </span>
                                <span
                                    onClick={() => handleShowDeleteCustomer(identity)}
                                    className={'cursor-pointer'}
                                >
                                        <BsTrash className={'icon'} /> Delete
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